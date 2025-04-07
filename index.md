---
layout: default
title: Home
nav_order: 1
---

# Awesome qLDPC Codes

A curated list of Quantum Low-Density Parity-Check (qLDPC) codes from theoretical proposals and experimental realizations.

[![GitHub](https://img.shields.io/badge/View_on-GitHub-lightgrey?logo=github)](https://github.com/francois-marie/awesome-qldpc)

## qLDPC Codes Database

<div class="table-wrapper">
<table id="qldpc-table">
  <thead>
    <tr>
      <th>Title</th>
      <th>n</th>
      <th>k</th>
      <th>d</th>
      <th>n_a</th>
      <th>Pseudo-threshold</th>
      <th>Decoder</th>
      <th>Family</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
</div>

## Visualization

![qLDPC Codes Plot]({{ '/assets/images/qldpc_codes_plot.png' | relative_url }})

## Contributing

To add a qLDPC code to this repository:
1. Fork the [repository](https://github.com/francois-marie/awesome-qldpc)
2. Add your code to the `data/qldpc_codes.csv` file
3. Submit a pull request

Each entry should include:
- Title of the paper
- Number of data qubits (n)
- Number of logical qubits (k)
- Code distance (d)
- Number of ancilla qubits (n_a)
- Pseudo-threshold
- Decoder type
- Code family
- DOI or arXiv link