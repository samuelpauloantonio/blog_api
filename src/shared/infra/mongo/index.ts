import configuration from 'src/config/configuration';
const { host, port, database_name, properties } = configuration.database;
export default {
    url: `mongodb://${host}:${port}/${database_name}`,
    properties,
};
