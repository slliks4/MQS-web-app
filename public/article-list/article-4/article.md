---
title: "Sentiment Analysis Bot"
author: "MUN Quant Society"
date: "2025-09-08"
linkedin: "https://www.linkedin.com/company/mun-quant-society/"
tags: ["NLP", "Sentiment Analysis", "Finance", "Python", "FMP API"]
summary: "An NLP-driven system that reads financial news and research articles from FMP and converts them into daily ticker-level sentiment scores, with rolling correlations to market alpha for signal discovery."
---


Our **Sentiment Analysis Bot** turns unstructured financial text into actionable, quantitative signals. It ingests articles from our data provider **Financial Modeling Prep (FMP)**, scores their tone with a finance-aware NLP model, and aggregates results into clean time series for each ticker. The output can be used directly for research, dashboards, or as features in trading strategies.

## What It Does

- **Ingests Articles (FMP):** Pulls news and research headlines/full text, de-duplicates by provider ID, and aligns each item to tickers and timestamps.  
- **Scores Sentiment:** Cleans text (HTML/URLs/boilerplate), then applies a finance-tuned classifier to produce a **sentiment score in [-1, 1]** and a **label** (Positive/Neutral/Negative).  
- **Aggregates by Ticker & Day:** Computes **daily average sentiment**, **7-day moving averages**, and **coverage counts** per symbol.  
- **Correlates with Alpha:** Calculates **rolling 30-day correlations** between sentiment and subsequent returns/alpha to assess predictive value (as in the visualization above).  

## Key Outputs & Visualizations

- **Daily Ticker Sentiment:** Core series for research and model features.  
- **7-Day Sentiment MA:** Smooth trend to reduce noise.  
- **Alpha vs. Sentiment Correlation (30-Day):** Highlights regimes where news tone aligns with performance (green) or diverges (red).  
- **Summary Metrics:** Hit rate, average score, coverage, and stability across time.

## Why It’s Useful

- **Signal Discovery:** Quickly identifies when sentiment is becoming a tailwind/headwind for a name or basket.  
- **Risk Context:** Drawdowns often coincide with negative tone clusters; tracking this adds context to position management.  
- **Plug-and-Play:** The series can feed your **Backtest Engine** or be exported for downstream ML.

## Architecture (At a Glance)

- **Data Source:** Financial Modeling Prep (FMP) articles/news API.  
- **Processing:** Python pipeline (vectorized Pandas/NumPy) with optional serverless scheduling.  
- **Storage:** Time-series tables keyed by `date, ticker` with summary rollups for fast charting.  
- **Extensible:** Easy to add topic tags (e.g., earnings, guidance, litigation) or entity-level sentiment.

## Caveats & Next Steps

- **Coverage Variability:** Smaller caps may have sparse news; smoothing helps.  
- **Nuance in Language:** Sarcasm/irony and domain drift remain hard; we mitigate with finance-tuned models and thresholding.  
- **Roadmap:** Topic modeling, cross-source blending, and intraday sentiment refresh for higher-frequency use cases.

## Conclusion

The Quantitative Sentiment Analysis Engine is a cutting-edge project that allows society members to explore the exciting intersection of data science, artificial intelligence, and finance. It serves as a practical tool for generating and testing novel trading ideas based on market psychology. This project enhances members' skills in NLP, time-series analysis, and quantitative research, empowering them to find alpha in unconventional data sources.
