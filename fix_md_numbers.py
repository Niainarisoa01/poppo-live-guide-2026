import os
import re

# We need to fix the title numbers in the .md files.
# The mapping from NEW number to OLD number inside the text is:
# 12.md (was 18) -> Change 18 to 12
# 13.md (was 12) -> Change 12 to 13
# 14.md (was 13) -> Change 13 to 14
# 15.md (was 14) -> Change 14 to 15
# 16.md (was 15) -> Change 15 to 16
# 17.md (was 16) -> Change 16 to 17
# 18.md (was 17) -> Change 17 to 18

replacements = {
    "12": "18",
    "13": "12",
    "14": "13",
    "15": "14",
    "16": "15",
    "17": "16",
    "18": "17"
}

files = {
    "12": "12_Regles_Live_Guidelines_Communautaires.md",
    "13": "13_Methodes_Retrait.md",
    "14": "14_Regles_Interdictions.md",
    "15": "15_Ban_Processus_Appel.md",
    "16": "16_Strategies_Croissance.md",
    "17": "17_Conseils_Erreurs_Eviter.md",
    "18": "18_Mises_a_Jour_Mai_2026.md"
}

for new_num, old_num in replacements.items():
    filename = files[new_num]
    if os.path.exists(filename):
        with open(filename, "r") as f:
            content = f.read()
        
        # Replace main title: Section 18 -> Section 12
        content = re.sub(rf"Section {old_num}", f"Section {new_num}", content)
        
        # Replace secondary titles: 18.1 -> 12.1, 18.2 -> 12.2
        content = re.sub(rf"## {old_num}\.", f"## {new_num}.", content)
        
        with open(filename, "w") as f:
            f.write(content)
        print(f"Fixed {filename}")

