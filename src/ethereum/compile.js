const path = require('path');
const solc = require ('solc');
const fs = require('fs-extra');

// const buildPath = path.resolve(__dirname, 'build');
// fs.removeSync(buildPath);

// const icoPath = path.resolve(__dirname, 'contracts', 'ICO.sol');
// const source = fs.readFileSync(icoPath, 'utf8');
// console.log('source', source);
// const output = solc.compile(source, 1).contracts;

// fs.ensureDirSync(buildPath);

// for(let contract in output){
//     fs.outputJSONSync(
//         path.resolve(buildPath, contract.replace(':', '') + '.json'),
//         output[contract]
        
//     );
// }



// var input = {
//   language: 'Solidity',
//   sources: {
//     'ICO.sol': {
//       content: source
//     }
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*']
//       }
//     }
//   }
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));

// console.log('output: ', output);

// // `output` here contains the JSON output as specified in the documentation
// for (var contractName in output.contracts['ICO.sol']) {
//   console.log(
//     contractName +
//       ': ' +
//       output.contracts['ICO.sol'][contractName].evm.bytecode.object
//   );
// }




// // returns a contract object compiled using solc
// // baseContractPath: relative path of the base contract, i.e. "./BaseContract.sol"
// const instantiateContract = (baseContractPath) => {
//     const sources = {};
//     compileImports(baseContractPath, sources);
  
//     var input = {
//       language: "Solidity",
//       sources: sources,
//       settings: {
//         outputSelection: {
//           "*": {
//             "*": ["*"],
//           },
//         },
//       },
//     };
  
//     const output = solc.compile(JSON.stringify(input));
//     const contract = JSON.parse(output);
//     const bytecode = "0x" + contract.contracts[baseContractPath]["Base"].evm.bytecode.object;
//     const abi = contract.contracts[baseContractPath]["Base"].abi;
//     return {
//       bytecode: bytecode,
//       abi: abi,
//     };
//   };
  
//   // returns sources: { "Contract.sol": { content: fs.readFileSync("pathName.sol",utf8)...}}
//   // using recursion
//   const compileImports = (root, sources) => {
//     sources[root] = { content: fs.readFileSync(root, "utf8") };
//     const imports = getNeededImports(root);
//     for (let i = 0; i < imports.length; i++) {
//       compileImports(imports[i], sources);
//     }
//   };
  
//   // returns all the import paths in absolute path
//   const getNeededImports = (path) => {
//     const file = fs.readFileSync(path, "utf8");
//     const files = new Array();
//     file
//       .toString()
//       .split("\n")
//       .forEach(function (line, index, arr) {
//         if (
//           (index === arr.length - 1 && line === "") || !line.trim().startsWith("import")
//         ) {
//           return;
//         }
//         // the import is legit
//         const relativePath = line.substring(8, line.length - 2);
//         const fullPath = buildFullPath(path, relativePath);
//         files.push(fullPath);
//       });
//     return files;
//   };
  
//   // parent: node_modules/.../ERC721/ERC721.sol
//   // returns absolute path of a relative one using the parent path
//   const buildFullPath = (parent, path) => {
//     let curDir = parent.substr(0, parent.lastIndexOf("/")); //i.e. ./node/.../ERC721
//     if (path.startsWith("./")) {
//       return curDir + "/" + path.substr(2);
//     }
  
//     while (path.startsWith("../")) {
//       curDir = curDir.substr(0, curDir.lastIndexOf("/"));
//       path = path.substr(3);
//     }
  
//     return curDir + "/" + path;
//   };
  
// //   module.exports = {
// //     instantiateContract,
// //   };

// const icoPath = path.resolve(__dirname, 'contracts', 'ICO.sol');
// const responseValue = instantiateContract(icoPath);
// console.log('responseValue: ', responseValue);























// const builtPath = path.resolve(__dirname, 'build');
// //remove file in build module
// fs.removeSync(builtPath);
// const bettingPath = path.resolve(__dirname, 'contracts','ICO.sol');
// //read  content present in file
// console.log(bettingPath);
// const source = fs.readFileSync(bettingPath, 'utf8');

// const input = {
//   language: 'Solidity',
//   sources: {
//     'ICO.sol': {
//       content: source,
//     } ,
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*']
//       }
//     }
//   }
// };

// //compile contract
// var output = JSON.parse(solc.compile(JSON.stringify(input)));

// //create build folder
// fs.ensureDirSync(builtPath);
// console.log(output);

// for(let contract in output.contracts['ICO.sol']){
//   fs.outputJsonSync(
//       path.resolve(buildPath, contract + '.json'),
//       output.contracts['ICO.sol'][contract].evm
//   );
// }








const instantiateContract = (baseContractPath) => {
    // compileImports(baseContractPath, sources);
    const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
    const source = fs.readFileSync(baseContractPath, 'utf8');
    const sources = {
        'ICO.sol': {
              content: source,
            }
        };

  
    var input = {
      language: "Solidity",
      sources: sources,
      settings: {
        outputSelection: {
            "*": {
                "": [
                    "ast"
                ],
                "*": [
                    "abi",
                    "metadata",
                    "devdoc",
                    "userdoc",
                    "storageLayout",
                    "evm.legacyAssembly",
                    "evm.bytecode",
                    "evm.deployedBytecode",
                    "evm.methodIdentifiers",
                    "evm.gasEstimates",
                    "evm.assembly"
                ]
            }
        },
      },
    };

    console.log("sources: ", sources);
    console.log("input: ", input);


    var contracts = JSON.parse(
        solc.compile(JSON.stringify(input), { import: getNeededImports })
      );
  
    // const output = solc.compile(JSON.stringify(input));
    // console.log("output: ", output);
    // const contract = JSON.parse(output);
    console.log("contracts: ", contracts);
    writeOutput(contracts, buildPath);
    

    function writeOutput(compiled, buildPath) {
        fs.ensureDirSync(buildPath);
    
        for (let contractFileName in compiled.contracts) {
            console.log('contractFileName: ', contractFileName);
            const contractName = contractFileName.substring(contractFileName.lastIndexOf("/") + 1, contractFileName.length - 4);
            console.log('Writing: ', contractName + '.json');
            fs.outputJsonSync(
                path.resolve(buildPath, contractName + '.json'),
                compiled.contracts[contractFileName][contractName]
            );
        }
    }
}
// for(let contract in contracts.contracts['ICO.sol']){
//     console.log("contract in: ", contract);
//       fs.outputJsonSync(
//           path.resolve(buildPath, contract + '.json'),
//           output.contracts['ICO.sol'][contract].evm
//       );
//     }
// }



//   const compileImports = (root, sources) => {
//     console.log("root: ", root);
//     sources[root] = { content: fs.readFileSync(root, "utf8") };
//     const imports = getNeededImports(root);
//     for (let i = 0; i < imports.length; i++) {
//       compileImports(imports[i], sources);
//     }
//   };
  
  // returns all the import paths in absolute path
  const getNeededImports = (path) => {

    console.log("path: ", path);
    if(path.lastIndexOf("node_modules") <= 0 && path.lastIndexOf("src") <= 0){
        path = "C:\\Users\\Developer\\Desktop\\Documents\\blockchain\\react\\ico\\node_modules\\" + path;
    }
    return {contents: fs.readFileSync(path, "utf8")};
  
  };




const icoPath = path.resolve(__dirname, 'contracts', 'ICO.sol');
const responseValue = instantiateContract(icoPath);
// console.log('responseValue: ', responseValue);
  