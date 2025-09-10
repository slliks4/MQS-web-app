---
title: "Asset Allocation — Fall Semester"
author: "MUN Quant Society"
date: "2025-09-09"
linkedin: "https://www.linkedin.com/company/mun-quant-society/"
tags: ["Asset Allocation", "Graph Theory", "Monte Carlo", "Networks", "Risk Modeling", "Python"]
summary: "A research workflow that builds influence networks from historical returns, identifies systemic assets and clusters, and uses these features to design diversified, shock-resilient portfolios."
---


This semester’s **Asset Allocation** project turns market structure into a **directed, weighted network** and uses it to guide portfolio construction. We repeatedly sample subsets of assets, measure predictive influence between them, and then use graph-theory features as risk factors and diversification guides. :contentReference[oaicite:0]{index=0}

## 1) Selecting Assets & Monte Carlo Subsets

- Start from a universe (e.g., **100 most active stocks** or **~20 ETFs**).  
- Test with **random subsets of k=30** assets at a time to capture **context dependence**—an asset’s importance changes with the group it’s in.  
- Run **thousands of Monte Carlo trials** to stabilize estimates across many random groupings. :contentReference[oaicite:1]{index=1}

## 2) Building the Influence Network

- **Nodes:** assets (stocks/ETFs).  
- **Edges:** predictive links from **pairwise regressions** on historical returns.  
  - If B’s returns significantly predict A’s, draw **B → A**.  
  - **Edge weight = R²**, capturing strength of the predictive relationship.  
- This provides **direction and strength**, going beyond static correlation matrices. :contentReference[oaicite:2]{index=2}

## 3) Key Influencers & Risk Clusters

- Compute **Eigenvector Centrality**, **Betweenness**, and **PageRank** to rank **systemically important** assets.  
- Use **community detection** (e.g., **Louvain Modularity**) to find **tight clusters** that share contagion risk.  
- Assets scoring high across many subsets indicate **persistent systemic influence**. :contentReference[oaicite:3]{index=3}

## 4) Predictive Modeling & Portfolio Design

- Build risk models where **network features are factors**, e.g.:  
  - *Future Volatility = α + β₁(Past Vol) + β₂(Eigenvector) + β₃(Betweenness) + ε*  
- Construct portfolios by **picking from weakly connected clusters** to reduce spillover risk more effectively than sector-only diversification. :contentReference[oaicite:4]{index=4}

## Outputs & Visuals

- **Influence graph** with weighted, directed edges.  
- **Centrality heatmaps** and **cluster maps** (Louvain communities).  
- **Monte Carlo stability panels** showing how rankings persist across subsets.  
- **Backtests** comparing cluster-aware portfolios vs. benchmarks.

## Tech Stack & Workflow

- **Python** (Pandas/NumPy, statsmodels/networkx) for vectorized computation.  
- **Scheduled runs** to refresh networks and factors.  
- **Storage:** time-series tables keyed by date/asset with factor snapshots and cluster labels.  
- **Integration:** feeds your Backtest Engine and research dashboards.

## Next Steps

- Add **nonlinear links** (e.g., trees/MI) alongside linear regressions.  
- Stress test clusters during **macro shock windows**.  
- Extend to **multi-asset** (rates, credit, commodities) with cross-market edges.

---
*Goal: turn market structure into actionable diversification—systematically and repeatably.*
