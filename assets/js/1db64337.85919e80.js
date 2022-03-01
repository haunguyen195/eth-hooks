"use strict";(self.webpackChunketh_hooks=self.webpackChunketh_hooks||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=i(n),d=a,k=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(k,c(c({ref:t},p),{},{components:n})):o.createElement(k,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),c=["components"],s={},l="\ud83d\udd87 Eth-hooks Overview",i={unversionedId:"overview",id:"overview",title:"\ud83d\udd87 Eth-hooks Overview",description:"Commonly used Ethereum hooks to supercharge your web3 dev!",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/eth-hooks/docs/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"overview",next:{title:"The Hooks!",permalink:"/eth-hooks/docs/main/hooks"}},p=[{value:"Author",id:"author",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2},{value:"EthersAppContext",id:"ethersappcontext",children:[],level:2},{value:"ContractAppContext",id:"contractappcontext",children:[],level:2},{value:"Caching &amp; optional updates",id:"caching--optional-updates",children:[],level:2},{value:"API Documentation",id:"api-documentation",children:[],level:2},{value:"Hooks!",id:"hooks",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"Setting up the context for eth-hooks",id:"setting-up-the-context-for-eth-hooks",children:[],level:2},{value:"Using the ethersAppContext &amp; hooks",id:"using-the-ethersappcontext--hooks",children:[],level:2},{value:"Pass in a provider directly into ethersAppContext",id:"pass-in-a-provider-directly-into-ethersappcontext",children:[],level:2},{value:"Using ethersAppContext with web3Modal",id:"using-ethersappcontext-with-web3modal",children:[{value:"1. Create your web3Config",id:"1-create-your-web3config",children:[],level:3},{value:"2. Create a function that returns a <code>TEthersModalConnector</code>",id:"2-create-a-function-that-returns-a-tethersmodalconnector",children:[],level:3},{value:"3. Create a login event handler",id:"3-create-a-login-event-handler",children:[],level:3}],level:2},{value:"Using ContractAppContext",id:"using-contractappcontext",children:[{value:"1. Generating types for your contract",id:"1-generating-types-for-your-contract",children:[{value:"An example on to use eth-sdk for external contracts",id:"an-example-on-to-use-eth-sdk-for-external-contracts",children:[{value:"An example of using hardhat with typechain",id:"an-example-of-using-hardhat-with-typechain",children:[],level:5}],level:4}],level:3},{value:"2. Creating the context with contractsContextFactory",id:"2-creating-the-context-with-contractscontextfactory",children:[],level:3},{value:"3. Using hooks to get your contracts",id:"3-using-hooks-to-get-your-contracts",children:[],level:3}],level:2},{value:"API Documentation",id:"api-documentation-1",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[{value:"Main package dependencies",id:"main-package-dependencies",children:[],level:3},{value:"Peer dependencies",id:"peer-dependencies",children:[],level:3}],level:2}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-eth-hooks-overview"},"\ud83d\udd87 Eth-hooks Overview"),(0,r.kt)("p",null,"Commonly used Ethereum hooks to supercharge your web3 dev!"),(0,r.kt)("p",null,"Used by \ud83c\udfd7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth"},"scaffold-eth")," and \ud83c\udfed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript"},"scaffold-eth-typescript")),(0,r.kt)("p",null,"Used by \u2699 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/eth-components"},"eth-components")),(0,r.kt)("p",null,"Created by \ud83c\udff0 ",(0,r.kt)("a",{parentName:"p",href:"https://BuidlGuidl.com"},"BuidlGuidl.eth")),(0,r.kt)("p",null,"Check out the docs \ud83d\udcda ",(0,r.kt)("a",{parentName:"p",href:"https://scaffold-eth.github.io/eth-hooks/"},"eth-hooks docs")),(0,r.kt)("h2",{id:"author"},"Author"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ShravanSunder"},"@shravansunder")),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ssp6"},"@ss6"))),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See this ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=STxAdE8wQwY"},"video summary on v4 features"),"!")),(0,r.kt)("h2",{id:"ethersappcontext"},"EthersAppContext"),(0,r.kt)("p",null,"A context that allows you to access the current ethers.js context and information such as provider, signer, account. This allows your user to easily log into web3 account using web3modal. You can setup up overrides and multiple providers."),(0,r.kt)("h2",{id:"contractappcontext"},"ContractAppContext"),(0,r.kt)("p",null,"Gives you a ",(0,r.kt)("inlineCode",{parentName:"p"},"contractContextFactory")," that allows you to easily setup typed contracts, load typed contracts, create connectors, and access them with hooks anywhere in your app."),(0,r.kt)("h2",{id:"caching--optional-updates"},"Caching & optional updates"),(0,r.kt)("p",null,"Caches the network RPC calls so that unecessary requests to the network is prevented. You can setup an update interval from every block, every (n) blocks, polling, onMount, onWindow focus and other react-query update options."),(0,r.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scaffold-eth.github.io/eth-hooks/"},"the documentation at the eth-hooks page!")),(0,r.kt)("h2",{id:"hooks"},"Hooks!"),(0,r.kt)("p",null,"Ethers App Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useBlockNumberContext"),(0,r.kt)("li",{parentName:"ul"},"useEthersContext")),(0,r.kt)("p",null,"Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useBalance"),(0,r.kt)("li",{parentName:"ul"},"useBlockNumber"),(0,r.kt)("li",{parentName:"ul"},"useContractExistsAtAddress"),(0,r.kt)("li",{parentName:"ul"},"useEventListener"),(0,r.kt)("li",{parentName:"ul"},"useGasPrice"),(0,r.kt)("li",{parentName:"ul"},"useNonce"),(0,r.kt)("li",{parentName:"ul"},"useSignerAddress")),(0,r.kt)("p",null,"Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useContractReader"),(0,r.kt)("li",{parentName:"ul"},"contractContextFactory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useLoadAppContracts"),(0,r.kt)("li",{parentName:"ul"},"useConnectAppContracts"),(0,r.kt)("li",{parentName:"ul"},"useConnectAppContracts"))),(0,r.kt)("li",{parentName:"ul"},"legacy (eth-hooks v2+)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useContractLoader"),(0,r.kt)("li",{parentName:"ul"},"useContractReaderUntyped")))),(0,r.kt)("p",null,"ERC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useTokenBalance")),(0,r.kt)("p",null,"Dapps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useDexEthPrice"),(0,r.kt)("li",{parentName:"ul"},"useDexTokenList"),(0,r.kt)("li",{parentName:"ul"},"useResolveEnsAddress"),(0,r.kt)("li",{parentName:"ul"},"useResolveEnsName")),(0,r.kt)("p",null,"Utility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useBurnerSigner")),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add eth-hooks\n")),(0,r.kt)("h2",{id:"setting-up-the-context-for-eth-hooks"},"Setting up the context for eth-hooks"),(0,r.kt)("p",null,"Add the contexts to your app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"<ContractsAppContext>\n  <EthersAppContext>\n    <YourMainPage />\n  </EthersAppContext>\n</ContractsAppContext>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can see an example of providers in scaffold-eth-typescript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/App.tsx"},"app.tsx"))),(0,r.kt)("h2",{id:"using-the-ethersappcontext--hooks"},"Using the ethersAppContext & hooks"),(0,r.kt)("p",null,"An example of using the context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ethersContext = useEthersContext();\n// you now have access to signer, provider, account (address), etc...  See IEthersContext for details\n")),(0,r.kt)("p",null,"An example of using a hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// ---------------------\n// \ud83c\udfe6 get your balance\n// ---------------------\n// This instance uses the provider from the context in useBalance internally\nconst [yourLocalBalance, update, status] = useBalance(ethersContext.account);\nZ;\n")),(0,r.kt)("p",null,"An example of changing an update interval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// normally the hooks update every block\nconst [yourLocalBalance, update, status] = useBalance(ethersContext.account);\n// you can change the update schedule to every 10 blocks, the default is every 1 block:\nconst [yourLocalBalance, update, status] = useBalance(ethersContext.account, { blockNumberInterval: 10 });\n// you can change the update schedule to every polling, min is 10000ms\nconst [yourLocalBalance, update, status] = useBalance(ethersContext.account, {\n  refetchInterval: 100000,\n  blockNumberInterval: undefined,\n});\n// you can use advanced react-query update options\nconst [yourLocalBalance, update, status] = useBalance(ethersContext.account, {\n  blockNumberInterval: 1,\n  query: { refetchOnWindowFocus: true },\n});\n")),(0,r.kt)("p",null,"An example of overriding the provider from the context"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// get an adaptor from a provider or signer\nconst [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(exampleMainnetProvider);\n// pass in the override variable\nconst [yourMainnetBalance] = useBalance(ethersContext.account, mergeDefaultUpdateOptions(), {\n  adaptorEnabled: true,\n  adaptor: mainnetAdaptor,\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check out examples in scaffold-eth-typescript in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/components/main/hooks/useScaffoldHooksExamples.tsx"},"useScaffoldHooksExamples.tsx"))),(0,r.kt)("h2",{id:"pass-in-a-provider-directly-into-ethersappcontext"},"Pass in a provider directly into ethersAppContext"),(0,r.kt)("p",null,"You can pass a provider into EthersAppContext directly if you don't want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"EthersModalConnect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web3Modal"),". This would be a way to override the default mechansim if you have your own login UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"<EthersAppContext customGetEthersAppProviderLibrary={customFunction}>\n  <YourMainPage />\n</EthersAppContext>\n")),(0,r.kt)("p",null,"In the above example ",(0,r.kt)("inlineCode",{parentName:"p"},"customFunction")," should be a function that returns a TEthersProvider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// a simple example\nexport type TGetEthersAppProviderLibrary = () => TEthersProvider;\n\n// a function that transforms a provider into a TEthersProvider\nexport type TGetEthersAppProviderLibrary = (\n  provider: TEthersProvider | ExternalProvider | JsonRpcFetchFunc | any\n) => TEthersProvider;\n")),(0,r.kt)("h2",{id:"using-ethersappcontext-with-web3modal"},"Using ethersAppContext with web3Modal"),(0,r.kt)("p",null,"Ethers context will automatically give you a way to integrate web3Modal into your app."),(0,r.kt)("h3",{id:"1-create-your-web3config"},"1. Create your web3Config"),(0,r.kt)("p",null,"The first create a web3Config. Check out their github repo for a detailed explanation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Web3Modal/web3modal#using-with-ethersjs"},"web3 modal"),". You could also see the example in scaffold-eth-typescript, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/web3ModalConfig.ts#L8"},"scaffold-eth-typescript web3ModalConfig.ts")),(0,r.kt)("h3",{id:"2-create-a-function-that-returns-a-tethersmodalconnector"},"2. Create a function that returns a ",(0,r.kt)("inlineCode",{parentName:"h3"},"TEthersModalConnector")),(0,r.kt)("p",null,"This function should have a signature that returns ",(0,r.kt)("inlineCode",{parentName:"p"},"TEthersModalConnector")," which is an interface that is implemented by ",(0,r.kt)("a",{parentName:"p",href:"https://scaffold-eth.github.io/eth-hooks/api-typedocs/classes/EthersContext.EthersModalConnector.html"},"EthersModalConnector")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type TCreateEthersModalConnector = (id?: string) => TEthersModalConnector | undefined;\n")),(0,r.kt)("p",null,"For example in scaffold-eth-typescript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/components/main/hooks/useScaffoldAppProviders.ts#L53"},"createLoginConnector")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// theme: can be 'light' or 'dark'\n// web3Config: is for web3Modal configuration\n// id: allows you to programatically to a provider defined for the modal, see the web3Modal for details.\nconst createLoginConnector: TCreateEthersModalConnector = useCallback(\n  (id?: string) => {\n    if (web3Config) {\n      const connector = new EthersModalConnector({ ...web3Config, theme: currentTheme }, id);\n      return connector;\n    }\n  },\n  [web3Config, currentTheme]\n);\n")),(0,r.kt)("p",null,"You can find the details for ",(0,r.kt)("a",{parentName:"p",href:"https://scaffold-eth.github.io/eth-hooks/api-typedocs/classes/EthersContext.EthersModalConnector.html"},"EthersModalConnector")," in the api docs."),(0,r.kt)("h3",{id:"3-create-a-login-event-handler"},"3. Create a login event handler"),(0,r.kt)("p",null,"You can then call the function we created above in the the event handler of your login button anywhere in your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  ...\n  const ethersContext = useEthersContext();\n\n  // to handle a login\n  const handleLoginClick = (): void => {\n    if (createLoginConnector != null && ethersContext?.openModal != null) {\n      const connector = createLoginConnector();\n      ethersContext.openModal(connector);\n    }\n  };\n\n  // to handle a log out\n  const handleLogoutClick = (): void => {\n    if (ethersContext?.disconnectModal != null) {\n      ethersContext.disconnectModal();\n    }\n  };\n")),(0,r.kt)("h2",{id:"using-contractappcontext"},"Using ContractAppContext"),(0,r.kt)("h3",{id:"1-generating-types-for-your-contract"},"1. Generating types for your contract"),(0,r.kt)("p",null,"The first thing you'll have to do is generate your contrac types for hardhat and external contracts. Add ",(0,r.kt)("inlineCode",{parentName:"p"},"eth-sdk")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"typechain with hardhat")," to generate that to a folder such as ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/contract-types"),". Pull ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript"},"scaffold-eth-typescript")," for an example of this."),(0,r.kt)("h4",{id:"an-example-on-to-use-eth-sdk-for-external-contracts"},"An example on to use eth-sdk for external contracts"),(0,r.kt)("p",null,"scaffold-eth-typescript uses ",(0,r.kt)("inlineCode",{parentName:"p"},"eth-sdk")," to generate types and abi for external contracts using. See the excellent documentation there for this at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dethcrypto/eth-sdk"},"eth-sdk github"),". \ud83d\udcdd Note that this would a dev dependency on your project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a config of ",(0,r.kt)("inlineCode",{parentName:"li"},"{contractNames: address}")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/externalContractsConfig.ts"},"externalContractConfig.ts")),(0,r.kt)("li",{parentName:"ul"},"a config for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/scripts/eth-sdk-config.ts.bak"},"eth-sdk-config.ts")),(0,r.kt)("li",{parentName:"ul"},"and calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"eth-sdk")," with the folder of your config file as a parameter e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn eth-sdk -p ./src/generated"))),(0,r.kt)("h5",{id:"an-example-of-using-hardhat-with-typechain"},"An example of using hardhat with typechain"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check out the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dethcrypto/TypeChain"},"typechain docs"),". You can find an example in scaffold-eth-typescript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/hardhat-ts/hardhat.config.ts"},"hardhat.config.ts"))),(0,r.kt)("h3",{id:"2-creating-the-context-with-contractscontextfactory"},"2. Creating the context with contractsContextFactory"),(0,r.kt)("p",null,"You'll have to create a config that returns a config of your contracts. This would be hetrogenous key value pair. each value is generated by the helper functions in eth-hooks."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// a function that generates the config. Note that your types have to exist already!\nexport const contractConnectorConfig = () => {\n  try {\n    const result = {\n      // \ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f Add your hadrdhat contracts here\n      YourContract: createConnectorForHardhatContract(\n        'YourContract',\n        hardhatContracts.YourContract__factory,\n        hardhatContractsJson\n      ),\n\n      // \ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f Add your external contracts here, make sure to define the address in `externalContractsConfig.ts`\n      DAI: createConnectorForExternalContract('DAI', externalContracts.DAI__factory, externalContractsAddressMap),\n      UNI: createConnectorForExternalContract('UNI', externalContracts.UNI__factory, externalContractsAddressMap),\n\n      // \ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f Add your external abi here (unverified contracts)`\n      // DAI: createConnectorForExternalAbi('DAI', { 1: {address: 'xxxx'}}, abi),\n    } as const;\n\n    return result;\n  } catch (e) {\n    console.error(\n      '\u274c contractConnectorConfig: ERROR with loading contracts please run `yarn contracts:build or yarn contracts:rebuild`.  Then run `yarn deploy`!',\n      e\n    );\n  }\n\n  return undefined;\n};\n\n// create a type from the return value of the function above\nexport type TAppConnectorList = NonNullable<ReturnType<typeof contractConnectorConfig>>;\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"contractContextFactory")," to create your hooks and context in your app from the above configuration. You could just copy the blow and use it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// you're passing in function `contractConnectorConfig` from above into the factory.  You then have to use the type we defined to type the factory outputs.\nexport const {\n  ContractsAppContext,\n  useAppContractsActions,\n  useAppContracts,\n  useLoadAppContracts,\n  useConnectAppContracts,\n} = contractsContextFactory<\n  /* the contractNames (keys) in config output */\n  keyof TAppConnectorList,\n  /* the type of the config output  */\n  TAppConnectorList,\n  /* A type that infers the value of each contractName: contract pair*/\n  TTypedContract<keyof TAppConnectorList, TAppConnectorList>\n>(contractConnectorConfig);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See scaffold-eth-typescript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/contractContext.ts"},"contractContext.tsx")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scaffold-eth/scaffold-eth-typescript/blob/next/packages/vite-app-ts/src/config/contractConnectorConfig.ts"},"contractConnectorConfig.ts")," for full examples on how to do this.")),(0,r.kt)("h3",{id:"3-using-hooks-to-get-your-contracts"},"3. Using hooks to get your contracts"),(0,r.kt)("p",null,"Now that you've created the context and hooks above you can use them in your app. The first step is to load your contracts using the hooks you've created with the factory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\udefb load contracts\nuseLoadAppContracts();\n")),(0,r.kt)("p",null,"Next you'll want to connect the contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \ud83c\udfed connect to  contracts for current network & signer\nuseConnectAppContracts(asEthersAdaptor(ethersContext));\n\n// \ud83c\udfed connect to contracts for mainnet network & signer\nconst [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(mainnetProvider);\nuseConnectAppContracts(mainnetAdaptor);\n")),(0,r.kt)("p",null,"Now you can get typed contracts anywhere in your"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const yourContract = useAppContracts('YourContract', ethersContext.chainId);\nconst mainnetDai = useAppContracts('DAI', NETWORKS.mainnet.chainId);\n")),(0,r.kt)("p",null,"You can read values from the contracts using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useContractReader")," hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// keep track of a variable from the contract in the local React state:\nconst [purpose, update] = useContractReader(\n  /* the contract */\n  yourContract,\n  /* the contract variable or function to read */\n  yourContract?.purpose,\n  /* the arguments, they are typed tuple */\n  [],\n  /* optional: if you want your contracts to only update on event */\n  yourContract?.filters.SetPurpose()\n);\n\n// keep track of a variable from the contract in the local React state:\nconst [purpose, update] = useContractReader(\n  /* the contract */\n  yourContract,\n  /* the contract variable or function to read */\n  yourContract?.purpose,\n  /* the arguments, they are typed tuple */\n  [],\n  undefined,\n  /* optional: update every 10 blocks */\n  { blockNumberInterval: 10 }\n);\n")),(0,r.kt)("h1",{id:"notes"},"Notes"),(0,r.kt)("h2",{id:"api-documentation-1"},"API Documentation"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scaffold-eth.github.io/eth-hooks/"},"the documentation at the eth-hooks page!")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h3",{id:"main-package-dependencies"},"Main package dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ethers.js"),(0,r.kt)("li",{parentName:"ul"},"@uniswap/token-lists"),(0,r.kt)("li",{parentName:"ul"},"@web3-react: core, abstractconnector, types"),(0,r.kt)("li",{parentName:"ul"},"web3modal"),(0,r.kt)("li",{parentName:"ul"},"react-query")),(0,r.kt)("h3",{id:"peer-dependencies"},"Peer dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"react, react/dom"),(0,r.kt)("li",{parentName:"ul"},"uniswap/sdk")))}h.isMDXComponent=!0}}]);