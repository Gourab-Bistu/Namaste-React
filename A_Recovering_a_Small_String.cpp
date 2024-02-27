#include<bits/stdc++.h>
using namespace std;
#define ll long long
vector<int>v={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
int main()
{
    int t;cin>>t;
    while (t--)
    {
        int n;cin>>n;
        string s = "";
        if(n<=27){
            s.push_back('a');
            s.push_back('a');
            int p = n-2;
            char ch = v[p-1];
            s.push_back(ch);
        }
        else if (n<=52){
            s.push_back('a');
            int p = (n-(1+26))>0?n-(1+26):1;
            // cout<<p<<endl;
            char ch = v[p-1];
            s.push_back(ch);
            s.push_back('z');
        }
        else {
            int p = n-(26+26);
            char ch = v[p-1];
            s.push_back(ch);
            s.push_back('z');
            s.push_back('z');
        }

        cout<<s<<endl;
    }
    
 return 0;
}