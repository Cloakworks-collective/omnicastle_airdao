/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  22040: {
    KingOfTheCastle: {
      address: "0xcd05229f4d382c0c8da75c83011e55299eea6b2b",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "WEATHERMAN_ROLE",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "attack",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeDefense",
          inputs: [
            {
              name: "archers",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "infantry",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "cavalry",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "gameState",
          inputs: [],
          outputs: [
            {
              name: "numberOfAttacks",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "castle",
              type: "tuple",
              internalType: "struct KingOfTheCastle.Castle",
              components: [
                {
                  name: "defense",
                  type: "tuple",
                  internalType: "struct KingOfTheCastle.Army",
                  components: [
                    {
                      name: "archers",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "infantry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "cavalry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
                {
                  name: "currentKing",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastKingChangedAt",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              name: "currentWeather",
              type: "uint8",
              internalType: "enum KingOfTheCastle.Weather",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getCastle",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct KingOfTheCastle.Castle",
              components: [
                {
                  name: "defense",
                  type: "tuple",
                  internalType: "struct KingOfTheCastle.Army",
                  components: [
                    {
                      name: "archers",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "infantry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "cavalry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
                {
                  name: "currentKing",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastKingChangedAt",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getCurrentWeather",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "enum KingOfTheCastle.Weather",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPlayer",
          inputs: [
            {
              name: "playerAddress",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct KingOfTheCastle.Player",
              components: [
                {
                  name: "generalName",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "attackingArmy",
                  type: "tuple",
                  internalType: "struct KingOfTheCastle.Army",
                  components: [
                    {
                      name: "archers",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "infantry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "cavalry",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
                {
                  name: "points",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "turns",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPlayerCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "joinGame",
          inputs: [
            {
              name: "generalName",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "lastTickTock",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mobilize",
          inputs: [
            {
              name: "archers",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "infantry",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "cavalry",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "playerAddresses",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setWeather",
          inputs: [
            {
              name: "newWeather",
              type: "uint8",
              internalType: "enum KingOfTheCastle.Weather",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tickTock",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "ArmyMobilized",
          inputs: [
            {
              name: "player",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "archers",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "infantry",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "cavalry",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "AttackLaunched",
          inputs: [
            {
              name: "attacker",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "defender",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "success",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "DefenseChanged",
          inputs: [
            {
              name: "king",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "archers",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "infantry",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "cavalry",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "PlayerJoined",
          inputs: [
            {
              name: "player",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "generalName",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TurnAdded",
          inputs: [
            {
              name: "player",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "newTurns",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "WeatherChanged",
          inputs: [
            {
              name: "newWeather",
              type: "uint8",
              indexed: false,
              internalType: "enum KingOfTheCastle.Weather",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessControlBadConfirmation",
          inputs: [],
        },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "neededRole",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
        },
      ],
      inheritedFunctions: {
        DEFAULT_ADMIN_ROLE: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        getRoleAdmin: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        grantRole: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        hasRole: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        renounceRole: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        revokeRole: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
        supportsInterface: "lib/openzeppelin-contracts/contracts/access/AccessControl.sol",
      },
    },
  },
  31337: {
    YourContract: {
      address: "0x700b6a60ce7eaaea56f065753d8dcb9653dbad35",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "greeting",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "premium",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setGreeting",
          inputs: [
            {
              name: "_newGreeting",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "totalCounter",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "userGreetingCounter",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "GreetingChange",
          inputs: [
            {
              name: "greetingSetter",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newGreeting",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "premium",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
