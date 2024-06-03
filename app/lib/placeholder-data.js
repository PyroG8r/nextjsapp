const avslutade_kurser = [
  {
    kod: 'DT027G',
    benamning: 'Datateknik GR (A), Grundläggande datavetenskap',
    omfattning: 6.0,
    betyg: 'A',
    datum: '2021-10-25',
    notering: '1'
  },
  {
    kod: 'FY033G',
    benamning: 'Fysik GR (A), Ingenjörsmetodik',
    omfattning: 6.0,
    betyg: 'A',
    datum: '2021-10-31',
    notering: '1'
  },
  {
    kod: 'KE032G',
    benamning: 'Kemi GR (A), Hållbar utveckling för ingenjörer',
    omfattning: 3.0,
    betyg: 'E',
    datum: '2022-01-12',
    notering: '1'
  },
  {
    kod: 'MA073G',
    benamning: 'Matematik GR (A), Linjär algebra I',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-01-14',
    notering: '1'
  },
  {
    kod: 'DT028G',
    benamning: 'Datateknik GR (A), Introduktion till programmering',
    omfattning: 6.0,
    betyg: 'A',
    datum: '2022-01-14',
    notering: '1'
  },
  {
    kod: 'MA115G',
    benamning: 'Matematik GR (A), Algebra',
    omfattning: 3.0,
    betyg: 'D',
    datum: '2022-01-31',
    notering: '1'
  },
  {
    kod: 'MA129G',
    benamning: 'Matematik GR (A), Differentialkalkyl',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-03-17',
    notering: '1'
  },
  {
    kod: 'ET061G',
    benamning: 'Elektroteknik GR (A), Digitalteknik med VHDL',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-04-06',
    notering: '1'
  },
  {
    kod: 'IG028G',
    benamning: 'Industriell organisation och ekonomi GR (A), Introduktion till projektbaserad produktutveckling',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-05-30',
    notering: '1'
  },
  {
    kod: 'MA131G',
    benamning: 'Matematik GR (A), Integralkalkyl',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-05-31',
    notering: '1'
  },
  {
    kod: 'DT026G',
    benamning: 'Datateknik GR (A), Objektbaserad programmering',
    omfattning: 6.0,
    betyg: 'A',
    datum: '2022-06-02',
    notering: '1'
  },
  {
    kod: 'MA068G',
    benamning: 'Matematik GR (B), Flervariabelanalys',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2022-10-26',
    notering: '1'
  },
  {
    kod: 'DT139G',
    benamning: 'Datateknik GR (B), Databaser, modellering och implementering',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-01-03',
    notering: '1'
  },
  {
    kod: 'DT202G',
    benamning: 'Datateknik GR (B), Operativsystem',
    omfattning: 6.0,
    betyg: 'D',
    datum: '2023-01-12',
    notering: '1'
  },
  {
    kod: 'ET095G',
    benamning: 'Elektroteknik GR (B), Introduktion till programmering av inbyggda system',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-01-25',
    notering: '1'
  },
  {
    kod: 'DT079G',
    benamning: 'Datateknik GR (B), Programmeringsmetodik',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-02-21',
    notering: '1'
  },
  {
    kod: 'MA095G',
    benamning: 'Matematik GR (A), Diskret matematik A',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-03-16',
    notering: '1'
  },
  {
    kod: 'DT100G',
    benamning: 'Datateknik GR (B), Webbprogrammering',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-03-20',
    notering: '1'
  },
  {
    kod: 'MA087G',
    benamning: 'Matematik GR (B), Matematisk statistik',
    omfattning: 6.0,
    betyg: 'E',
    datum: '2023-06-01',
    notering: '1'
  },
  {
    kod: 'DT064G',
    benamning: 'Datateknik GR (B), Datastrukturer och algoritmer',
    omfattning: 6.0,
    betyg: 'E',
    datum: '2023-06-02',
    notering: '1'
  },
  {
    kod: 'ET047G',
    benamning: 'Elektroteknik GR (A), Ellära och elektronik',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2023-10-13',
    notering: '1'
  },
  {
    kod: 'DT174G',
    benamning: 'Datateknik GR (C), Akademiskt skrivande och vetenskaplig metod',
    omfattning: 3.0,
    betyg: 'D',
    datum: '2023-10-29',
    notering: '1'
  },
  {
    kod: 'DT168G',
    benamning: 'Datateknik GR (C), Människa-datorinteraktion',
    omfattning: 6.0,
    betyg: 'E',
    datum: '2023-12-10',
    notering: '1'
  },
  {
    kod: 'MÖ025G',
    benamning: 'Miljöteknik GR (A), Arbetsmiljö för ingenjörer',
    omfattning: 3.0,
    betyg: 'C',
    datum: '2024-01-12',
    notering: '1'
  },
  {
    kod: 'DT075G',
    benamning: 'Datateknik GR (B), Multimedie- och kommunikationssystem',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2024-01-12',
    notering: '1'
  },
  {
    kod: 'DT142G',
    benamning: 'Datateknik GR (C), Applikationsutveckling i Java, projektkurs',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2024-01-14',
    notering: '1'
  },
  {
    kod: 'MA069G',
    benamning: 'Matematik GR (B), Matematisk modellering',
    omfattning: 6.0,
    betyg: 'C',
    datum: '2024-01-26',
    notering: '1'
  }
];

module.exports = {
  avslutade_kurser
};
