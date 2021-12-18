class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };

  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }

  repairCar(carName) {
    let hoursNow = new Date(Date.now()).getHours();
    if (!carName) {
      console.error(
        "Вам необходимо указать название машины, чтобы ее отремонтировать"
      );
    } else if (
      hoursNow <= Number(this.workingHours.from.split(":")[0]) ||
      hoursNow >= Number(this.workingHours.till.split(":")[0])
    ) {
      console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
    } else {
      console.log(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`
      );
    }
  }
}

const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "21:00",
});
carService.repairCar("BMW");

//
