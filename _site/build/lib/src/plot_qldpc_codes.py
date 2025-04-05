import pandas as pd
import plotly.express as px
import os

def plot_qldpc_codes():
    # Ensure output directories exist
    os.makedirs('out/png', exist_ok=True)
    os.makedirs('out/pdf', exist_ok=True)
    
    df = pd.read_csv('data/qldpc_codes.csv')  # Changed from '../data/qldpc_codes.csv'
    fig = px.scatter(df, x='n', y='d', color='k', title='qLDPC Codes Plot',
                     labels={'n': 'Number of Data Qubits (n)', 
                            'd': 'Code Distance (d)', 
                            'k': 'Logical Qubits (k)'})
    
    # Save plots
    fig.write_image("out/png/qldpc_codes_plot.png")
    fig.write_image("out/pdf/qldpc_codes_plot.pdf")

if __name__ == "__main__":
    plot_qldpc_codes()