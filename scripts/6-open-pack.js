import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xb4F76b38cde03919A1bb8864308290B313EA88E9';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}