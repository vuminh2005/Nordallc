#include <iostream>
using namespace std;

int check = -1;
int x;
int y;

int zodiac() {
    cin >> x >> y;
    if (x >= 20 && y == 1) {
        check = 0;
    } else if (x <= 18 && y == 2) {
        check = 0;
    } else if (x >= 19 && y == 2) {
        check = 1;
    } else if (x <= 20 && y == 3) {
        check = 1;
    } else if (x >= 21 && y == 3) {
        check = 2;
    } else if (x <= 19 && y == 4) {
        check = 2;
    } else if (x >= 20 && y == 4) {
        check = 3;
    } else if (x <= 20 && y == 5) {
        check = 3;
    } else if (x >= 21 && y == 5) {
        check = 4;
    } else if (x <= 21 && y == 6) {
        check = 4;
    } else if (x >= 22 && y == 6) {
        check = 5;
    } else if (x <= 22 && y == 7) {
        check = 5;
    } else if (x >= 23 && y == 7) {
        check = 6;
    } else if (x <= 22 && y == 8) {
        check = 6;
    } else if (x >= 23 && y == 8) {
        check = 7;
    } else if (x <= 22 && y == 9) {
        check = 7;
    } else if (x >= 23 && y == 9) {
        check = 8;
    } else if (x <= 23 && y == 10) {
        check = 8;
    } else if (x >= 24 && y == 10) {
        check = 9;
    } else if (x <= 22 && y == 11) {
        check = 9;
    } else if (x >= 23 && y == 11) {
        check = 10;
    } else if (x <= 21 && y == 12) {
        check = 10;
    } else if (x >= 22 && y == 12) {
        check = 11;
    } else if (x <= 19 && y == 1) {
        check = 11;
    }
    return 100;
}

int main() {
    switch (check) {
        case 0:
            cout << "Bao Binh";
            break;
        case 1:
            cout << "Song Ngu";
            break;
        case 2:
            cout << "Bach Duong";
            break;
        case 3:
            cout << "Kim Nguu";
            break;
        case 4:
            cout << "Song Tu";
            break;
        case 5:
            cout << "Cu Giai";
            break;
        case 6:
            cout << "Su Tu";
            break;
        case 7:
            cout << "Xu Nu";
            break;
        case 8:
            cout << "Thien Binh";
            break;
        case 9:
            cout << "Thien Yet";
            break;
        case 10:
            cout << "Nhan Ma";
            break;
        case 11:
            cout << "Ma Ket";
            break;
    }
    return 100;
}
