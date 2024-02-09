import prisma from "../utils/database.utils";

export const typeDefs = `#graphql

type Client {
  id: Int!
  ci: Int!
  fullname: String!
  address: String
  phone: String
  status: Int!
}

type Moto {
  id: Int!
  marca: String
  modelo: String!
  anio: Int
  placa: String!
  motor: String
  color: String
  peso: Float
  kilometraje: Float
  estado: String
  fecha_compra: String!
  precio_compra: Float!
  client: Client!
  dispositivo: Dispositivo!
}

type Dispositivo {
  id:Int!
  serial:String!
  moto:Moto!
  positions:[Position!]!
}

type Position {
  id: Int!
  date: String!
  latitude: Float!
  longitude: Float!
  timestamp: Int
  speed: Float
  batt: Float
  dispositivo: Dispositivo! 
}

type Query {
  allClients: [Client!]!
  allMotos: [Moto!]!
  allDispositivos: [Dispositivo!]!
  allPositions: [Position!]!
}
`;

export const resolvers = {
  Query: {
    allClients: () => {
      return prisma.client.findMany();
    },
    allMotos: () => {
      return prisma.moto.findMany();
    },
    allDispositivos: () => {
      return prisma.dispositivo.findMany();
    },
    allPositions: () => {
      return prisma.position.findMany();
    },
  },
  Moto: {
    client: (parent, args, context) => {
      return prisma.client.findUnique({
        where: { id: parent.id },
      });
    },
    dispositivo: (parent, args, context) => {
      return prisma.dispositivo.findUnique({
        where: { id: parent.id },
      });
    },
  },
  Dispositivo: {
    moto: (parent, args, context) => {
      return prisma.moto.findUnique({
        where: { id: parent.id },
      });
    },
    positions: (parent, args, context) => {
      return prisma.position.findUnique({
        where: { id: parent.id },
      });
    },
  },
  Position: {
    dispositivo: (parent, args, context) => {
      return prisma.dispositivo.findUnique({
        where: { id: parent.id },
      });
    },
  },
};
