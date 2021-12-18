const startGame = (heroPlayer, enemyPlayer) => {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    function getRandomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    if (getRandomNumberInRange(0, 2) === 0) {
      heroPlayer.heatEnemy(enemy);
    } else if (getRandomNumberInRange(0, 2) === 1) {
      enemyPlayer.heatHero(hero);
    }
  }

  let winnerName,
    winnerHealth = "";

  if (heroPlayer.health > enemyPlayer.health) {
    winnerName = heroPlayer.name;
    winnerHealth = heroPlayer.health;
  } else {
    winnerName = enemyPlayer.name;
    winnerHealth = enemyPlayer.health;
  }

  alert(`${winnerName} победил! У него осталось ${winnerHealth}% здоровья`);
};

const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: (a) => {
    a.health = a.health - 10;
  },
};

const enemy = {
  name: "Joker",
  health: 100,
  heatHero: (b) => {
    b.health = b.health - 10;
  },
};

startGame(hero, enemy);
