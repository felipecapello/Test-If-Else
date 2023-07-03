namePower = prompt("Digite o nome do poder");
powerDamage = prompt("Digite o dano que o " + namePower + " da de dano");
nameHero = prompt("Digite o nome do Defensor");
heroHeath = prompt("Digite a vida do Defensor");
heroDefense = prompt("Digite a defesa do Defensor");
heroShield = prompt(
  "Caso o Defensor tenha, digite 1, caso não tenha, digite 0"
);

if (powerDamage > heroDefense && heroShield == 0) {
  heroHeath = heroHeath - (powerDamage - heroDefense);

  console.log(nameHero + " tomou " + (powerDamage - heroDefense) + " de dano");
  console.log(nameHero + " está com " + heroHeath + " pontos de vida");
} else if (powerDamage > heroDefense && heroShield == 1) {
  heroHeath = heroHeath - (powerDamage - heroDefense) / 2;
  console.log(
    "O " +
      nameHero +
      " tomou metade do dano que deveria tomar por conta do seu escudo, então tomou " +
      heroHeath +
      " de dano"
  );
  console.log(nameHero + " está com " + heroHeath + " de pontos de vida");
} else if (powerDamage <= heroDefense) {
  console.log("O " + namePower + " não deu dano algum");
  console.log(nameHero + " está com " + heroHeath + " pontos de vida");
}
