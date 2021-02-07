const quizSelect1 = [
{
  question:
    "Quelle est la capitale du Portugal ?",
  answers: ["Dublin", "Lisbonne", "Managua", "Rome"],
  correct: "Lisbonne",
  questionId: "1"
},
{
  question:
    "Quelle est la capitale de la Turquie ?",
  answers: ["Istanbul", "Antalya", "Ankara", "Izmir"],
  correct: "Ankara",
  questionId: "2"
},
{
  question:
    "Quel pays a pour capitale Addis-Abeba",
  answers: ["Soudan", "Éthiopie", "Égypte", "Nigeria"],
  correct: "Éthiopie",
  questionId: "3"
},
{
  question:
    "Quelle est la capitale de l’Uruguay ?",
  answers: ["Belmopan", "Asunción", "Santiago", "Montevideo"],
  correct: "Montevideo",
  questionId: "4"
},
{
  question:
    "Quel pays a pour capitale Bakou ?",
  answers: ["Azerbaïdjan", "Tadjikistan", "Turkménistan", "Lettonie"],
  correct: "Azerbaïdjan",
  questionId: "5"
},
{
  question:
    "Quelle est la capitale de la Macédoine ?",
  answers: ["Apia", "Skopje", "Chisinau", "Monrovia"],
  correct: "Skopje",
  questionId: "6"
},
{
  question:
    "Quelle est la capitale politique de la Côte d’Ivoire ?",
  answers: ["Abidjan", "Niamey", "Yamoussoukro", "Accra"],
  correct: "Yamoussoukro",
  questionId: "7"
},
{
  question:
    "Quelle est la capitale du Bangladesh ?",
  answers: ["Manama", "Dhaka", "Rangoun", "Thimphou"],
  correct: "Dhaka",
  questionId: "8"
},
{
  question:
    "Quel pays a pour capitale Dodoma ?",
  answers: ["Émirats Arabes Unis", "Mozambique", "Tanzanie", "Ouganda"],
  correct: "Tanzanie",
  questionId: "9"
},
{
  question:
    "Quelle est la capitale des Pays-Bas ?",
  answers: ["Amsterdam", "Londres", "Paris", "Nouille"],
  correct: "Amsterdam",
  questionId: "10"
},
{
  question:
    "Quelle est la capitale de l'Andorre ?",
  answers: ["Andora", "Andorre la Veille", "Andorresse", "Andorre-la-Vieille"],
  correct: "Andorre-la-Vieille",
  questionId: "11"
},
{
  question:
    "Quelle est la capitale de Corée du Nord ?",
  answers: ["Dakar", "Gitega", "Vaduz", "Pyongyang"],
  correct: "Pyongyang",
  questionId: "12"
},
{
  question:
    "Quelle est la capitale de Afghanistan ?",
  answers: ["Managua", "La Havane", "Kaboul", "Delap-Uliga-Darrit"],
  correct: "Kaboul",
  questionId: "13"
},
{
  question:
    "Quelle est la capitale de Tadjikistan ?",
  answers: ["Quito", "Belmopan", "Douchanbé", "Dakar"],
  correct: "Douchanbé",
  questionId: "14"
},
{
  question:
    "Quelle est la capitale de Venezuela ?",
  answers: ["Thimphou", "Berlin", "Melekeok", "Caracas"],
  correct: "Caracas",
  questionId: "15"
},
{
  question:
    "Quelle est la capitale de Corée du Sud ?",
  answers: ["Mexico", "Kigali", "Séoul", "Islamabad"],
  correct: "Séoul",
  questionId: "16"
},
{
  question:
    "Quelle est la capitale de Monaco ?",
  answers: ["Helsinki", "Accra", "Madrid", "Monaco"],
  correct: "Monaco",
  questionId: "17"
},
];

export default (n = 10) =>
  Promise.resolve(quizSelect1.sort(() => 0.5 - Math.random()).slice(0, n));
