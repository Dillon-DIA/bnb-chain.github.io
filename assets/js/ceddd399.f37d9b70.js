"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Run Validator",sidebar_position:2,hide_table_of_contents:!1},l="Run Validator",i={unversionedId:"validator/run-val",id:"validator/run-val",title:"Run Validator",description:"Validator Hardware Requirements",source:"@site/docs/validator/run-val.md",sourceDirName:"validator",slug:"/validator/run-val",permalink:"/docs/validator/run-val",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/run-val.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Run Validator",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Create Validator",permalink:"/docs/validator/create-val"},next:{title:"Overview",permalink:"/docs/stake/Staking"}},p={},s=[{value:"Validator Hardware Requirements",id:"validator-hardware-requirements",level:2},{value:"1. Mainnet",id:"1-mainnet",level:3},{value:"2. Testnet",id:"2-testnet",level:3},{value:"Setting up Validator Node",id:"setting-up-validator-node",level:2},{value:"1. Install BSC Fullnode",id:"1-install-bsc-fullnode",level:3},{value:"2. Start Validator Node",id:"2-start-validator-node",level:3},{value:"Post Running",id:"post-running",level:2},{value:"1. Monitor node status",id:"1-monitor-node-status",level:3},{value:"2. Update validator profile",id:"2-update-validator-profile",level:3},{value:"3. Publish Validator Information",id:"3-publish-validator-information",level:3},{value:"4. Stop Validating",id:"4-stop-validating",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-validator"},"Run Validator"),(0,r.kt)("h2",{id:"validator-hardware-requirements"},"Validator Hardware Requirements"),(0,r.kt)("h3",{id:"1-mainnet"},"1. Mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X or Linux."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IMPORTANT")," 3T GB of free disk space, solid-state drive(SSD), gp3, 8k IOPS, 250MB/S throughput, read latency <1ms (if start with snap sync, it will need NVMe SSD)"),(0,r.kt)("li",{parentName:"ul"},"16 cores of CPU and 64 gigabytes of memory (RAM)"),(0,r.kt)("li",{parentName:"ul"},"Suggest m5zn.3xlarge instance type on AWS, or c2-standard-16 on Google cloud."),(0,r.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of 10 megabyte per second")),(0,r.kt)("h3",{id:"2-testnet"},"2. Testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU: 4core, Intel(R) Xeon(R) Platinum 8175M CPU @ 2.50GHz"),(0,r.kt)("li",{parentName:"ul"},"Memory: 16 GB"),(0,r.kt)("li",{parentName:"ul"},"Disk: ~1.5 TB"),(0,r.kt)("li",{parentName:"ul"},"Network Bandwidth: Upto 25 Gbps"),(0,r.kt)("li",{parentName:"ul"},"EBS Bandwidth: Upto 9.5 Gbps")),(0,r.kt)("h2",{id:"setting-up-validator-node"},"Setting up Validator Node"),(0,r.kt)("h3",{id:"1-install-bsc-fullnode"},"1. Install BSC Fullnode"),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"here to set up a full node"),"."),(0,r.kt)("h3",{id:"2-start-validator-node"},"2. Start Validator Node"),(0,r.kt)("p",null,"There are 2 ways to start the validator node."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using the command line as below:\n!!! Warning\nPlease do not expose your RPC endpoints to public network.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## generate the consensus key and input the password\necho {your-password to the mining account} > password.txt\necho {your-password for the bls wallet} > blspassword.txt\ngeth --config ./config.toml --datadir ./node --syncmode snap -unlock {the address of your mining account} --password password.txt --blspassword blspassword.txt --mine --vote --allow-insecure-unlock --cache 18000\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Follow the below steps as an alternative:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1. Create a voting key first: ",(0,r.kt)("inlineCode",{parentName:"p"},"./geth bls account new --datadir <path>")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It will generate a wallet if it has not been created before, you have to keep the wallet password. If the wallet has been created before, you only need to provide the password.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then it will create an account, you have to keep the account password too, the password length should >=10 characters."),(0,r.kt)("p",{parentName:"li"},"Note: Remember, you can create several accounts, but only one will be used.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2. You can view keys in the wallet by: ",(0,r.kt)("inlineCode",{parentName:"p"},"./geth bls account list --datadir <path>")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Remember the first one listed here will be used as the voting key, other keys are not used right now."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 3. Update the config file: config.toml (Update ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eth.miner")," section in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file.)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add 2 fields under ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," section: ",(0,r.kt)("inlineCode",{parentName:"p"},"BLSPasswordFile")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"BLSWalletDir"),"."),(0,r.kt)("p",{parentName:"li"},"You need to provide the file: ",(0,r.kt)("inlineCode",{parentName:"p"},"/<path>/bls/blspassword.txt"),", may generate it by: ",(0,r.kt)("inlineCode",{parentName:"p"},"echo <WalletPassword> >/<path>/bls/blspassword.txt")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add 1 field in ",(0,r.kt)("inlineCode",{parentName:"p"},"[Eth.Miner]")," section: ",(0,r.kt)("inlineCode",{parentName:"p"},"VoteEnable = true")," to enable it.\nOr you may manually add an option on node start: ",(0,r.kt)("inlineCode",{parentName:"p"},"geth --vote")," to enable it as well.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The content of the config.toml for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  ...\n  [Node]\n  BLSPasswordFile = "/<path>/bls/blspassword.txt"\n  BLSWalletDir = "/<path>/bls/wallet"\n  ...\n  [Eth.Miner]\n  VoteEnable = true\n  ...\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},'Note: if the node prints: "BLS wallet did not exists.",\nthen you may add the flag to specify it: ',(0,r.kt)("inlineCode",{parentName:"em"},"\u2013blswallet /<path>/bls/wallet")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 4: restart",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You may only provide the flag: ",(0,r.kt)("inlineCode",{parentName:"li"},"--vote"),", if you did not specify it in config.toml\nThen you may go ahead, just restart the node.")))),(0,r.kt)("p",null,"For more details, please look into this: ",(0,r.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/t/bnb-smart-chain-testnet-luban-upgrade-announcement/1331"},"https://forum.bnbchain.org/t/bnb-smart-chain-testnet-luban-upgrade-announcement/1331")," (section: ",(0,r.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/t/bnb-smart-chain-testnet-luban-upgrade-announcement/1331#h-22important-for-validator-operator-8"},"https://forum.bnbchain.org/t/bnb-smart-chain-testnet-luban-upgrade-announcement/1331#h-22important-for-validator-operator-8"),")"),(0,r.kt)("h2",{id:"post-running"},"Post Running"),(0,r.kt)("h3",{id:"1-monitor-node-status"},"1. Monitor node status"),(0,r.kt)("p",null,"To get started quickly, run GethExporter in a Docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run -it -d -p 9090:9090 \\\n  -e "GETH=http://mygethserverhere.com:8545" \\\n  hunterlong/gethexporter\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://grafana.com/api/dashboards/6976/images/4471/image",alt:null})),(0,r.kt)("h3",{id:"2-update-validator-profile"},"2. Update validator profile"),(0,r.kt)("p",null,"You can submit a PullRequest to this repository to update your information: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/validator-directory"},"https://github.com/bnb-chain/validator-directory"),"\nReference: ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/6976"},"https://grafana.com/grafana/dashboards/6976")),(0,r.kt)("h3",{id:"3-publish-validator-information"},"3. Publish Validator Information"),(0,r.kt)("p",null,"Please submit a Pull Request to this repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/validator-directory"},"https://github.com/bnb-chain/validator-directory")),(0,r.kt)("p",null,"This repository is a place for validator candidates to give potential delegators a brief introduction about your team and infrastructure, and present your ecosystem contributions."),(0,r.kt)("h3",{id:"4-stop-validating"},"4. Stop Validating"),(0,r.kt)("p",null,"You can stop mining new blocks by sending commands in ",(0,r.kt)("strong",{parentName:"p"},"geth console")),(0,r.kt)("p",null,"Connect to your validator node with ",(0,r.kt)("strong",{parentName:"p"},"geth attach ipc:path/to/geth.ipc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"miner.stop()\n")),(0,r.kt)("p",null,"To resume validating,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"miner.start()\n")))}c.isMDXComponent=!0}}]);