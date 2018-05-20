# Docker-compose for Scienceroot Waves Network

## Generate Genesis block
- Clone Waves repo
- Set genesis config
- Run sbt task

### Docker approach (slower but no sbt installation needed)
```
docker run -it -v <WAVES_REPO_PATH>:/Waves hseeberger/scala-sbt

cd /Waves

sbt "test:runMain tools.GenesisBlockGenerator src/test/resources/genesis.example.conf"
```

## Backup blockchain data
Before storing a backup the node has to be stopped.

```
# Replace PROJECT_ROOT with path to root of project dir.

sudo java -DSCR_WAVES_DATA_DIR=<PROJECT_ROOT>/data -cp ./container/waves.jar com.wavesplatform.Exporter ./conf/private-testnet.conf ./backup/huehuehue.backup 
```

## Debug

### Get miner info

```
curl -v -XGET -H 'api_key: <API_KEY>' -H "Content-type: application/json" '<WAVES_NODE_URL>/debug/minerInfo'
```

