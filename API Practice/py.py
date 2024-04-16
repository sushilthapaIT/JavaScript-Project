from datetime import datetime

class Car:
    def __init__(self, make, model, colour="Red"):
        self.make = make
        self.model = model
        self.colour = colour.capitalize()
        self.year = datetime.now().year

    def __str__(self):
        return f"Make: {self.make}, Model: {self.model}, Colour: {self.colour}, Year: {self.year}"

# Example usage:
car1 = Car("Toyota", "Camry")
print(car1)

car2 = Car("Honda", "Accord", "Blue")
print(car2)

