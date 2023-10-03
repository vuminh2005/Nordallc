#include <iostream>
using namespace std;

int main() {
    string s, t;
    cin >> s >> t;
    int count = 0;
    int length = s.length();

    for (int i = 0; i < length; i++) {
        if (s[i] == t[i]) {
            count++;
        }
    }

    cout << count;

    return 0;
}
