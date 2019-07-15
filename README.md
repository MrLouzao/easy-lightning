# ⚡easy-lightning
Server deployment that publishes a REST API to bypass through existant Lightning Network implementations.

# Requirements
To build this project you will need:
- Lightning Node with RPC API exposed
- Node

## Deployment

By now we are going to use only a test purpose instance running locally. LND node instance will be connected to Bitcoin testnet in collaboration with Neutrino.

1. Create an image of LND container from Github Repository
```bash
$ docker build -t lmlouzao/lnd-neutrino -f lnd-dockerfile .
```

2. Create an image of easy-lightning from this repository:
```
$ docker build -t lnd/easy-lightning .
```

3. Run docker-compose to create a test environment:
```bash
$ docker-compose up
```

4. Create a wallet for your lncli instance. User a long password. In another terminal type:
```bash
$ docker exec -it easy-lightning_lnd_neutrino_1 lncli create
```

## Fallbacks

When trying to connect to LND node, port 8080 must be exposed. 9735 is the port for peer connection, not for rpc.

More info: https://github.com/lightningnetwork/lnd/issues/1173


## Built with
- Node

## Authors
- Luis Miguel Louzao (luismiguel.louzao.gonzalez@gmail.com)

See also the list of [contributors](https://github.com/MrLouzao/easy-lightning/graphs/contributors) who participated in this project