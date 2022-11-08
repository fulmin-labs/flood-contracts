# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.1.1] - 2022-10-06

### Changed

- The user requesting the trade, which we call trader in the code, is now part of the tradeId.
The tradeId is now calculated from "tokenIn, tokenOut, amountIn, minAmountOut, recipient, tradeIndex, trader" 
- Add trader as an indexed field in the TradeRequested event, make tokenOut non indexed
- Add trader as an indexed field in the TradeFilled event
- Add trader as an indexed field in the TradeSettled event
- Add trader as an indexed field in the TradeDisputed event, make relayer non indexed 
- Add trader as an indexed field in the TradeCancelled event
- Add trader as an indexed field in the TradeDisputeSettled event, make relayer non indexed


### Fixed