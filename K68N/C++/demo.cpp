#include <iostream>
#include <string>

using namespace std;

int main() {
    string firstName;
    string lastName;
    string age;

    cout << "Please insert your first name, last name and age: ";

    cin >> firstName >> lastName >> age;

    string fullName = firstName + " " + lastName + " " + age;

    cout << fullName;

    return 0;
}

