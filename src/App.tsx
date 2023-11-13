import { Button, Card, Chip, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

const App: React.FC = () => {
  const [enkrip, setEnkrip] = useState("");
  const [dekrip, setDekrip] = useState("");
  const [tab, setTab] = useState("encode");

  // Encode OTP => vigenere & poyalphabet
  const vigenereAngka = (plaintext: string, kunci: number[]) => {
    const hurufAbjad = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let indexKunci = 0;
    let count = 0;
    let chiper = [];

    // convert plaintext dengan algoritma vigenere
    for (let i = 0; i < plaintext.length; i++) {
      let indexPlaintext = hurufAbjad.findIndex((e) => e === plaintext[i]);
      count = indexPlaintext + kunci[indexKunci];

      // jika hasil penjumlahan melebih index huruf abjad
      if (count >= 26) {
        count -= 26;
      }

      // input data ke array
      chiper.push(hurufAbjad[count]);

      indexKunci++;

      if (kunci.length === indexKunci) {
        indexKunci = 0;
      }
    }

    return chiper;
  };

  const polyalphabet = (plaintext: string, kunci: string) => {
    const hurufAbjad = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let domData = [];
    let chiper = [];

    // menghilangkan huruf yang sama pada kunci
    let lastKunci = "";
    for (let i = 0; i < kunci.length; i++) {
      let huruf = kunci[i];
      if (lastKunci.indexOf(huruf) === -1) {
        lastKunci += huruf;
      }
    }

    // menghilangkan huruf yang sama antara kunci dan huruf abjad
    let lastHurufAbjad = [];
    for (let i = 0; i < hurufAbjad.length; i++) {
      let huruf = hurufAbjad[i];
      if (lastKunci.indexOf(huruf) === -1) {
        lastHurufAbjad.push(huruf);
      }
    }

    // input data ke dalam dom data
    for (let i = 0; i < lastKunci.length; i++) {
      domData.push(lastKunci[i]);
    }

    for (let i = 0; i < lastHurufAbjad.length; i++) {
      domData.push(lastHurufAbjad[i]);
    }

    // convert huruf abjad ke berdasar dom data
    for (let i = 0; i < plaintext.length; i++) {
      let indexPlaintext = hurufAbjad.findIndex((e) => e === plaintext[i]);

      // input data ke array
      chiper.push(domData[indexPlaintext]);
    }

    return chiper;
  };

  const deVigenereAngka = (plaintext: string, kunci: number[]) => {
    const hurufAbjad = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let indexKunci = 0;
    let count = 0;
    let chiper = [];

    // convert plaintext dengan algoritma vigenere
    for (let i = 0; i < plaintext.length; i++) {
      let indexPlaintext = hurufAbjad.findIndex((e) => e === plaintext[i]);
      count = indexPlaintext - kunci[indexKunci];

      // jika hasil penjumlahan melebih index huruf abjad
      if (count < 0) {
        count += 26;
      }

      // input data ke array
      chiper.push(hurufAbjad[count]);

      indexKunci++;

      if (kunci.length === indexKunci) {
        indexKunci = 0;
      }
    }

    return chiper;
  };

  const dePolyalphabet = (plaintext: string, kunci: string) => {
    const hurufAbjad = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let domData = [];
    let chiper = [];

    // menghilangkan huruf yang sama pada kunci
    let lastKunci = "";
    for (let i = 0; i < kunci.length; i++) {
      let huruf = kunci[i];
      if (lastKunci.indexOf(huruf) === -1) {
        lastKunci += huruf;
      }
    }

    // menghilangkan huruf yang sama antara kunci dan huruf abjad
    let lastHurufAbjad = [];
    for (let i = 0; i < hurufAbjad.length; i++) {
      let huruf = hurufAbjad[i];
      if (lastKunci.indexOf(huruf) === -1) {
        lastHurufAbjad.push(huruf);
      }
    }

    // input data ke dalam dom data
    for (let i = 0; i < lastKunci.length; i++) {
      domData.push(lastKunci[i]);
    }

    for (let i = 0; i < lastHurufAbjad.length; i++) {
      domData.push(lastHurufAbjad[i]);
    }

    // convert huruf abjad ke berdasar dom data
    for (let i = 0; i < plaintext.length; i++) {
      let indexPlaintext = domData.findIndex((e) => e === plaintext[i]);

      // input data ke array
      chiper.push(hurufAbjad[indexPlaintext]);
    }

    return chiper;
  };

  function encode(data: string) {
    const kunciVigenere = [2, 6, 8, 7];
    const chiperVigenere = vigenereAngka(data, kunciVigenere).join("");

    // enkrip dengan polyalphabet
    const kunciPolyalphabet = "AKASHIYUU";

    // console.log(chiperVigenere);
    const chiperPolyalphabet = polyalphabet(
      chiperVigenere,
      kunciPolyalphabet
    ).join("");

    setDekrip(chiperPolyalphabet);
    setEnkrip("");
  }

  function decode(data: string) {
    const kunciVigenere = [2, 6, 8, 7];
    const kunciPolyalphabet = "AKASHIYUU";

    // dekrip dengan polyalphabet
    const chiperDePolyalphabet = dePolyalphabet(data, kunciPolyalphabet).join(
      ""
    );

    // dekrip dengan vigenere
    const chiperDeVigenere = deVigenereAngka(
      chiperDePolyalphabet,
      kunciVigenere
    ).join("");
    // console.log(chiperDeVigenere);

    setEnkrip(chiperDeVigenere);
    setDekrip("");
  }

  function reset() {
    setDekrip("");
    setEnkrip("");
  }

  return (
    <Card className="body">
      <h2>beConvert</h2>
      <div className="box">
        <div className="tabs">
          <div>
            <Chip
              label="Encode"
              color="primary"
              variant={tab !== "decode" ? "filled" : "outlined"}
              onClick={() => setTab("encode")}
            />
            <Chip
              label="Decode"
              color="primary"
              variant={tab === "decode" ? "filled" : "outlined"}
              onClick={() => setTab("decode")}
            />
          </div>

          <Chip
            label="Reset Convert"
            color="error"
            variant={"filled"}
            onClick={() => reset()}
          />
        </div>
        <div className="cardConvert">
          <Card
            elevation={0}
            sx={tab !== "encode" ? { background: "lightgrey" } : {}}
          >
            <Typography>Encode</Typography>
            <textarea
              value={enkrip}
              disabled={tab !== "encode"}
              style={tab !== "encode" ? { background: "lightgrey" } : {}}
              placeholder="Masukkan plaintext disini.."
              onChange={(e) => setEnkrip(e.target.value)}
            />
            <Button
              disabled={tab !== "encode"}
              size="small"
              variant="contained"
              onClick={() => encode(enkrip.toUpperCase())}
            >
              Convert
            </Button>
          </Card>
          <Typography> - </Typography>
          <Card
            elevation={0}
            sx={tab !== "decode" ? { background: "lightgrey" } : {}}
          >
            <Typography>Decode</Typography>
            <textarea
              value={dekrip}
              disabled={tab !== "decode"}
              style={tab !== "decode" ? { background: "lightgrey" } : {}}
              placeholder="Masukkan chiphertext disini.."
              onChange={(e) => setDekrip(e.target.value)}
            />
            <Button
              disabled={tab !== "decode"}
              size="small"
              variant="contained"
              onClick={() => decode(dekrip.toUpperCase())}
            >
              Convert
            </Button>
          </Card>
        </div>
        <Card className="ket" elevation={0}>
          <Typography variant="overline">Noted: </Typography>
          <Typography variant="inherit" sx={{ fontSize: 14 }}>
            Pada project ini, digunakan sistem encode dan decode dengan
            menggunakan OTP. Saya menerapkan 2 kriptografi yaitu vigenere Angka
            dan dilanjutkan dengan polyalphabet.
          </Typography>
        </Card>
      </div>
      <Typography variant="caption">
        Design & Development By Ahmad Ashidiq
      </Typography>
    </Card>
  );
};

export default App;
