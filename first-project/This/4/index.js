const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 26,
  artillery: 3,
  //
  checkChancesToWin(defenderObject) {
    console.log("лучники:", attacker.archer, "vs", this.archer);
    console.log("пехота:", attacker.footSoldier, "vs", this.footSoldier);
    console.log("конница:", attacker.cavalry, "vs", this.cavalry);
    console.log("пушки:", attacker.artillery, "vs", this.artillery);

    let chance = 0;

    if (attacker.archer > this.archer) chance += 1;
    if (attacker.footSoldier > this.footSoldier) chance += 1;
    if (attacker.cavalry > this.cavalry) chance += 1;
    if (attacker.artillery > this.artillery) chance += 1;

    return [chance, Object.keys(this).length];
  },

  improveArmy() {
    this.archer += 5;
    this.footSoldier += 5;
    this.cavalry += 5;
    this.artillery += 5;
  },

  attack(def) {
    let status = this.checkChancesToWin.call(def),
      ourArmyChances = status[0],
      maximumChances = status[1];

    if (ourArmyChances / maximumChances < 0.7) {
      this.improveArmy();
      console.log(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо подрепление!`
      );
    } else if (
      ourArmyChances / maximumChances >= 0.7 &&
      ourArmyChances / maximumChances < 1
    ) {
      console.log(
        `Мы усилились! Мы несомненно победим! Наши шансы высоки! Но давайте ещё подкрепление. (шансы ${ourArmyChances}/${maximumChances})`
      );
      this.improveArmy();
    } else {
      console.log(
        `Мы мощны, как никогда! Сметём врагов без затруднений. Больше не нужно подкреплений. (шансы ${ourArmyChances}/${maximumChances})`
      );
    }
  },
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
console.log("==================");
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
console.log("==================");
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
console.log("==================");
attacker.attack(defender); // Полнейшее превосходство
