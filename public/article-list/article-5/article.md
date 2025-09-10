---
title: "BTC Risk Regimes"
author: "MUN Quant Society"
date: "2025-09-09"
linkedin: "https://www.linkedin.com/company/mun-quant-society/"
tags: ["Risk Regimes", "Bitcoin", "Momentum", "Quantitative Finance", "Python", "Asset Allocation"]
summary: "A momentum-driven framework using Bitcoin as a real-time barometer of risk appetite. Detects risk-on/off regimes with a memory-weighted, range-aware signal and maps them into tactical rotations."
---


**BTC Risk Regimes** treats Bitcoin not just as an asset, but as a **thermometer for global risk appetite**. Because BTC trades 24/7 and reacts quickly to liquidity shifts, we use its momentum—enhanced with intraday range information—to anticipate transitions between **risk-on** and **risk-off** environments.

## What It Does

- **Detects Regimes:** Classifies markets into **Momentum Overflow (Risk-On)** and **Momentum Reversal (Risk-Off)** based on BTC momentum crossing calibrated thresholds.  
- **Two Daily Decision Points:**  
  1) **Pre-open snapshot** (lead signal before U.S. equities open)  
  2) **Post-close snapshot** (confirmation after market close)  
- **Turns Signals into Allocations:** Rotates into **high-beta exposures** during risk-on and into **defensive sleeves** (treasuries, utilities, gold) during risk-off.

## Methodology (At a Glance)

- **Memory-Weighted Momentum:** Emphasizes sustained moves while down-weighting short-term noise, capturing persistent speculative flows.  
- **Range-Based Information:** Incorporates the **high-low-close** relationship to embed intraday dynamics and reduce false positives relative to close-only signals.  
- **Thresholds → States:** Positive crossings → **Overflow (Risk-On)**, negative crossings → **Reversal (Risk-Off)**.

## Outputs & Visuals

- **Regime Timeline:** Daily labels showing risk-on/off phases.  
- **Rolling Performance Slices:** High-beta vs. benchmark during risk-on; defensive sleeves during risk-off.  
- **Signal Diagnostics:** Momentum level, range contribution, and hit-rate summaries.

## Why It’s Useful

- **Forward-Looking:** BTC provides signals **outside** traditional market hours.  
- **Robustness:** Range-aware momentum is less whipsaw-prone than close-only filters.  
- **Actionable:** Direct mapping to **tactical asset allocation** and hedging.

## Practical Notes & Limitations

- **Crypto-Specific Shocks:** Some BTC moves won’t translate to traditional assets; confirm with secondary indicators when needed.  
- **Calibration Matters:** Thresholds require validation across regimes and liquidity regimes.  
- **Extensions:** Add ETH or other liquidity-sensitive assets as confirmers; blend with volatility indices for regime confidence scoring.

## Tech & Implementation

- **Pipeline:** Python (vectorized Pandas/NumPy) with scheduled jobs to compute signals and publish allocations.  
- **Storage:** Lightweight time-series tables keyed by date with regime flags and diagnostics.  
- **Integration:** Feeds dashboards and can plug directly into your **Backtest Engine** for strategy research.

---
*Built to convert a 24/7 market’s information edge into timely, systematic rotations.*
