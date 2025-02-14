import { Command } from "commander";
import { getPublicKeyFromPrivateKey } from "../../common";

const program = new Command();

program.version("0.0.1");

program
  .command("get-public-key")
  .description("get public key")
  .action(() => {
    // Sample private key (32 bytes)
    const samplePrivateKey = new Uint8Array([
      0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0x01, 0x23, 0x45, 0x67,
      0x89, 0xab, 0xcd, 0xef, 0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef,
      0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef,
    ]);
    console.log(
      "PublicKey : " +
        Buffer.from(getPublicKeyFromPrivateKey(samplePrivateKey)).toString(
          "hex"
        )
    );
  });

program.parse(process.argv);
