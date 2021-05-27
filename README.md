# react-benchmark

Inspired by https://zenn.dev/uhyo/articles/usememo-time-cost

## My Environment

- macOS Catalina 10.15.7
- MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports)
- 2.8 GHz Quad-Core Intel Core i7
- 16 GB 2133 MHz LPDDR3

## Development

![development performance](https://github.com/januswel/react-benchmark/blob/main/images/dev.png)

## Production

![production performance](https://github.com/januswel/react-benchmark/blob/main/images/prod.png)

## Getting Started

```console
yarn

# for development measurement
yarn start

# for production measurement
yarn build
yarn global add serve
serve -s build
# open http://localhost:5000
```
