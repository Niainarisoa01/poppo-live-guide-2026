import os
import re

components_dir = "components/sections"

# Mapping from new file name number to old internal number
# e.g., Section13.tsx used to be Section12, so it has 12.1 inside it. We need to change 12. to 13.
# Wait, let's just do it based on filename!
# For each file SectionX.tsx, we want the function to be SectionX, and <h2>X.1 to be correct.

# Actually, the old mapping:
# Section12.tsx (was 18) -> change 18 to 12
# Section13.tsx (was 12) -> change 12 to 13
# Section14.tsx (was 13) -> change 13 to 14
# Section15.tsx (was 14) -> change 14 to 15
# Section16.tsx (was 15) -> change 15 to 16
# Section17.tsx (was 16) -> change 16 to 17
# Section18.tsx (was 17) -> change 17 to 18

replacements = {
    "12": "18", # in Section12, replace 18 with 12
    "13": "12",
    "14": "13",
    "15": "14",
    "16": "15",
    "17": "16",
    "18": "17"
}

for new_num, old_num in replacements.items():
    file_path = os.path.join(components_dir, f"Section{new_num}.tsx")
    with open(file_path, "r") as f:
        content = f.read()
    
    # Replace function name: export default function SectionX()
    content = re.sub(rf"export default function Section{old_num}\(\)", f"export default function Section{new_num}()", content)
    
    # Replace headings: <h2>18.1 -> <h2>12.1
    content = re.sub(rf"<h2>{old_num}\.", f"<h2>{new_num}.", content)
    
    with open(file_path, "w") as f:
        f.write(content)
    print(f"Fixed {file_path}")

