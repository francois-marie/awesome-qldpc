import pandas as pd
import os

def generate_readme():
    df = pd.read_csv('data/qldpc_codes.csv')  # Changed from '../data/qldpc_codes.csv'
    with open('README.md', 'w') as f:
        # Header
        f.write("# Awesome qLDPC Codes\n\n")
        f.write("This repository gathers theoretical proposals of qLDPC codes.\n\n")
        
        # Add plots section
        f.write("## Visualizations\n\n")
        f.write("### qLDPC Codes Parameters\n")
        f.write("![qLDPC Codes Plot](out/png/qldpc_codes_plot.png)\n\n")
        
        # Codes List
        f.write("## Codes List\n\n")
        for index, row in df.iterrows():
            f.write(f"- **Title**: {row['title']}\n")
            f.write(f"  - **DOI**: {row['doi']}\n")
            f.write(f"  - **Parameters**: n={row['n']}, k={row['k']}, d={row['d']}, n_a={row['n_a']}\n\n")

if __name__ == "__main__":
    generate_readme()