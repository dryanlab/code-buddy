#!/usr/bin/env python3
"""Insert challengeCpp blocks into alg-lessons.ts for all 40 challenges."""

# Each entry: (title, description, starterCode, hint, solution, expectedOutput)
# All strings use \\n for newlines inside the template literal

cpp_challenges = [
    # C1: Frequency Counter
    {
        "title": "🔍 Frequency Counter · 频率计数器",
        "description": "Find the most frequent element in an array.\\n找到数组中出现最频繁的元素。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <unordered_map>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {1,3,2,1,4,1,3,1};\\n    // Find most frequent element and its count\\n    return 0;\\n}',
        "hint": "Use unordered_map to count, then find max. 用 unordered_map 计数再找最大值。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <unordered_map>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {1,3,2,1,4,1,3,1};\\n    unordered_map<int,int> counts;\\n    for(int x:arr) counts[x]++;\\n    int best=-1,bestC=0;\\n    for(auto&[k,v]:counts) if(v>bestC){bestC=v;best=k;}\\n    cout<<"("<<best<<", "<<bestC<<")"<<endl;\\n    return 0;\\n}',
        "expectedOutput": "(1, 4)",
    },
    # C2: Two Sum
    {
        "title": "🎯 Two Sum · 两数之和",
        "description": "Find two indices whose values sum to target.\\n找到两个索引，其值之和为目标值。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <unordered_map>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {2,7,11,15};\\n    int target = 9;\\n    // Find indices\\n    return 0;\\n}',
        "hint": "Use a hash map to store seen values and their indices. 用哈希表存储已遍历的值和索引。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <unordered_map>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {2,7,11,15};\\n    int target = 9;\\n    unordered_map<int,int> seen;\\n    for(int i=0;i<(int)arr.size();i++){\\n        if(seen.count(target-arr[i])){cout<<"("<<seen[target-arr[i]]<<", "<<i<<")"<<endl;break;}\\n        seen[arr[i]]=i;\\n    }\\n    return 0;\\n}',
        "expectedOutput": "(0, 1)",
    },
    # C3: Count Occurrences
    {
        "title": "📖 Count Occurrences · 计算出现次数",
        "description": "Count occurrences using binary search in a sorted array.\\n在有序数组中用二分搜索计算出现次数。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint countOcc(vector<int>& arr, int target) {\\n    // Use binary search to find leftmost and rightmost\\n    return 0;\\n}\\nint main() {\\n    vector<int> arr = {1,2,2,2,3,4,5};\\n    cout << countOcc(arr, 2) << endl;\\n    cout << countOcc(arr, 6) << endl;\\n    return 0;\\n}',
        "hint": "Find leftmost and rightmost positions with binary search. 用二分搜索找到最左和最右位置。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint countOcc(vector<int>& arr, int target) {\\n    auto findLeft=[&](){int lo=0,hi=(int)arr.size()-1,res=-1;while(lo<=hi){int m=(lo+hi)/2;if(arr[m]<target)lo=m+1;else if(arr[m]>target)hi=m-1;else{res=m;hi=m-1;}}return res;};\\n    auto findRight=[&](){int lo=0,hi=(int)arr.size()-1,res=-1;while(lo<=hi){int m=(lo+hi)/2;if(arr[m]<target)lo=m+1;else if(arr[m]>target)hi=m-1;else{res=m;lo=m+1;}}return res;};\\n    int l=findLeft(),r=findRight();\\n    if(l==-1)return 0;return r-l+1;\\n}\\nint main() {\\n    vector<int> arr={1,2,2,2,3,4,5};\\n    cout<<countOcc(arr,2)<<endl;\\n    cout<<countOcc(arr,6)<<endl;\\n    return 0;\\n}',
        "expectedOutput": "3\\n0",
    },
    # C4: Peak Finder
    {
        "title": "🎯 Peak Finder · 峰值查找",
        "description": "Find a peak element index using binary search.\\n用二分搜索找到峰值元素索引。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint findPeak(vector<int>& arr) {\\n    // Binary search for peak\\n    return 0;\\n}\\nint main() {\\n    vector<int> arr = {1,3,20,4,1,0};\\n    cout << findPeak(arr) << endl;\\n    return 0;\\n}',
        "hint": "Compare mid with mid+1. Move towards the larger side. 比较 mid 和 mid+1，向大的一边移动。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint findPeak(vector<int>& arr) {\\n    int lo=0,hi=(int)arr.size()-1;\\n    while(lo<hi){int m=(lo+hi)/2;if(arr[m]<arr[m+1])lo=m+1;else hi=m;}\\n    return lo;\\n}\\nint main() {\\n    vector<int> arr={1,3,20,4,1,0};\\n    cout<<findPeak(arr)<<endl;\\n    return 0;\\n}',
        "expectedOutput": "2",
    },
    # C5: Island Counter
    {
        "title": "🗺️ Island Counter · 岛屿计数器",
        "description": "Count the number of islands (connected 1s) in a grid.\\n计算网格中岛屿（连通的1）的数量。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint countIslands(vector<vector<int>>& grid) {\\n    // DFS to count islands\\n    return 0;\\n}\\nint main() {\\n    vector<vector<int>> grid = {{1,1,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}};\\n    cout << countIslands(grid) << endl;\\n    return 0;\\n}',
        "hint": "DFS from each unvisited 1, mark visited cells. 从每个未访问的1开始DFS，标记已访问。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvoid dfs(vector<vector<int>>& g,int r,int c){\\n    if(r<0||r>=(int)g.size()||c<0||c>=(int)g[0].size()||g[r][c]==0)return;\\n    g[r][c]=0;dfs(g,r+1,c);dfs(g,r-1,c);dfs(g,r,c+1);dfs(g,r,c-1);\\n}\\nint countIslands(vector<vector<int>>& g){\\n    int cnt=0;for(int i=0;i<(int)g.size();i++)for(int j=0;j<(int)g[0].size();j++)if(g[i][j]==1){cnt++;dfs(g,i,j);}return cnt;\\n}\\nint main(){\\n    vector<vector<int>> g={{1,1,0,0},{0,1,0,0},{0,0,1,0},{0,0,0,1}};\\n    cout<<countIslands(g)<<endl;return 0;\\n}',
        "expectedOutput": "2",
    },
    # C6: Spiral Matrix
    {
        "title": "🔢 Spiral Matrix · 螺旋矩阵",
        "description": "Return elements of a matrix in spiral order.\\n按螺旋顺序返回矩阵元素。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<vector<int>> m = {{1,2,3},{4,5,6},{7,8,9}};\\n    // Print spiral order\\n    return 0;\\n}',
        "hint": "Use four boundaries: top, bottom, left, right. Shrink after each pass. 用四个边界逐层收缩。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<vector<int>> m={{1,2,3},{4,5,6},{7,8,9}};\\n    int top=0,bot=2,left=0,right=2;\\n    vector<int> res;\\n    while(top<=bot&&left<=right){\\n        for(int c=left;c<=right;c++)res.push_back(m[top][c]);top++;\\n        for(int r=top;r<=bot;r++)res.push_back(m[r][right]);right--;\\n        if(top<=bot){for(int c=right;c>=left;c--)res.push_back(m[bot][c]);bot--;}\\n        if(left<=right){for(int r=bot;r>=top;r--)res.push_back(m[r][left]);left++;}\\n    }\\n    cout<<"[";for(int i=0;i<(int)res.size();i++){if(i)cout<<", ";cout<<res[i];}cout<<"]"<<endl;\\n    return 0;\\n}',
        "expectedOutput": "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
    },
    # C7: Min Difference Pair
    {
        "title": "📏 Min Difference Pair · 最小差值对",
        "description": "Find the pair with minimum difference in a sorted array.\\n在排序数组中找到差值最小的对。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <climits>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {1,3,4,8,13,17};\\n    // Find pair with min difference\\n    return 0;\\n}',
        "hint": "In a sorted array, min diff is between adjacent elements. 排序数组中最小差值在相邻元素间。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <climits>\\nusing namespace std;\\nint main(){\\n    vector<int> arr={1,3,4,8,13,17};\\n    int minD=INT_MAX,a=arr[0],b=arr[1];\\n    for(int i=0;i<(int)arr.size()-1;i++){\\n        int d=arr[i+1]-arr[i];if(d<minD){minD=d;a=arr[i];b=arr[i+1];}\\n    }\\n    cout<<"("<<a<<", "<<b<<")"<<endl;return 0;\\n}',
        "expectedOutput": "(3, 4)",
    },
    # C8: Bitonic Search
    {
        "title": "🔄 Bitonic Search · 双调搜索",
        "description": "Search in a bitonic (mountain) array.\\n在双调（山形）数组中搜索。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint bitonicSearch(vector<int>& arr, int target) {\\n    // Find peak, then binary search both halves\\n    return -1;\\n}\\nint main() {\\n    vector<int> arr = {1,3,5,7,6,4,2};\\n    cout << bitonicSearch(arr, 6) << endl;\\n    cout << bitonicSearch(arr, 8) << endl;\\n    return 0;\\n}',
        "hint": "Find peak first, then binary search ascending and descending halves. 先找峰值，再分别二分搜索两半。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint bitonicSearch(vector<int>& a, int t){\\n    int lo=0,hi=(int)a.size()-1;\\n    while(lo<hi){int m=(lo+hi)/2;if(a[m]<a[m+1])lo=m+1;else hi=m;}\\n    int peak=lo;\\n    lo=0;hi=peak;while(lo<=hi){int m=(lo+hi)/2;if(a[m]==t)return m;if(a[m]<t)lo=m+1;else hi=m-1;}\\n    lo=peak;hi=(int)a.size()-1;while(lo<=hi){int m=(lo+hi)/2;if(a[m]==t)return m;if(a[m]>t)lo=m+1;else hi=m-1;}\\n    return -1;\\n}\\nint main(){\\n    vector<int> a={1,3,5,7,6,4,2};\\n    cout<<bitonicSearch(a,6)<<endl;\\n    cout<<bitonicSearch(a,8)<<endl;return 0;\\n}',
        "expectedOutput": "4\\n-1",
    },
    # C9: Dutch National Flag
    {
        "title": "🎨 Dutch National Flag · 荷兰国旗",
        "description": "Sort array of 0s, 1s, 2s in one pass.\\n一次遍历排序0、1、2数组。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {2,0,1,2,1,0,0,1,2};\\n    // Sort in one pass\\n    return 0;\\n}',
        "hint": "Three pointers: lo for 0s, mid for scanning, hi for 2s. 三指针：lo放0，mid扫描，hi放2。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<int> a={2,0,1,2,1,0,0,1,2};\\n    int lo=0,mid=0,hi=(int)a.size()-1;\\n    while(mid<=hi){\\n        if(a[mid]==0){swap(a[lo],a[mid]);lo++;mid++;}\\n        else if(a[mid]==1)mid++;\\n        else{swap(a[mid],a[hi]);hi--;}\\n    }\\n    cout<<"[";for(int i=0;i<(int)a.size();i++){if(i)cout<<", ";cout<<a[i];}cout<<"]"<<endl;return 0;\\n}',
        "expectedOutput": "[0, 0, 0, 1, 1, 1, 2, 2, 2]",
    },
    # C10: Stable Sort Test
    {
        "title": "📊 Stable Sort Test · 稳定排序测试",
        "description": "Sort students by grade (stable - preserve name order for equal grades).\\n按成绩稳定排序学生。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <string>\\nusing namespace std;\\nint main() {\\n    vector<pair<string,int>> students = {{"Alice",85},{"Bob",92},{"Carol",85},{"Dave",92}};\\n    // Stable sort by grade\\n    return 0;\\n}',
        "hint": "Use insertion sort or std::stable_sort for stability. 用插入排序或stable_sort保证稳定性。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <string>\\n#include <algorithm>\\nusing namespace std;\\nint main(){\\n    vector<pair<string,int>> s={{"Alice",85},{"Bob",92},{"Carol",85},{"Dave",92}};\\n    stable_sort(s.begin(),s.end(),[](auto&a,auto&b){return a.second<b.second;});\\n    for(auto&[name,grade]:s)cout<<"(\\'"<<name<<"\\', "<<grade<<")"<<endl;\\n    return 0;\\n}',
        "expectedOutput": "('Alice', 85)\\n('Carol', 85)\\n('Bob', 92)\\n('Dave', 92)",
    },
    # C11: Merge K Lists
    {
        "title": "🔗 Merge K Lists · 合并 K 个列表",
        "description": "Merge K sorted lists into one sorted list.\\n合并K个有序列表为一个有序列表。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nint main() {\\n    vector<vector<int>> lists = {{1,4,7},{2,5,8},{3,6,9}};\\n    // Merge all into one sorted list\\n    return 0;\\n}',
        "hint": "Use a min-heap (priority_queue) to always pick the smallest. 用最小堆每次取最小值。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nint main(){\\n    vector<vector<int>> lists={{1,4,7},{2,5,8},{3,6,9}};\\n    priority_queue<tuple<int,int,int>,vector<tuple<int,int,int>>,greater<>> pq;\\n    for(int i=0;i<(int)lists.size();i++)if(!lists[i].empty())pq.push({lists[i][0],i,0});\\n    vector<int> res;\\n    while(!pq.empty()){auto[v,li,idx]=pq.top();pq.pop();res.push_back(v);if(idx+1<(int)lists[li].size())pq.push({lists[li][idx+1],li,idx+1});}\\n    cout<<"[";for(int i=0;i<(int)res.size();i++){if(i)cout<<", ";cout<<res[i];}cout<<"]"<<endl;return 0;\\n}',
        "expectedOutput": "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
    },
    # C12: Merge Sort Inversion Count
    {
        "title": "🔢 Merge Sort Inversion Count · 归并排序逆序对",
        "description": "Count inversions using merge sort.\\n用归并排序计算逆序对数。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint countInv(vector<int>& arr) {\\n    // Merge sort based inversion count\\n    return 0;\\n}\\nint main() {\\n    vector<int> arr = {5,3,2,4,1};\\n    cout << countInv(arr) << endl;\\n    return 0;\\n}',
        "hint": "During merge, when right element is smaller, add (mid-i+1) inversions. 合并时右边小则加逆序对数。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint mergeCount(vector<int>& a,int l,int r){\\n    if(l>=r)return 0;int m=(l+r)/2;\\n    int inv=mergeCount(a,l,m)+mergeCount(a,m+1,r);\\n    vector<int> tmp;int i=l,j=m+1;\\n    while(i<=m&&j<=r){if(a[i]<=a[j])tmp.push_back(a[i++]);else{tmp.push_back(a[j++]);inv+=m-i+1;}}\\n    while(i<=m)tmp.push_back(a[i++]);while(j<=r)tmp.push_back(a[j++]);\\n    for(int k=l;k<=r;k++)a[k]=tmp[k-l];return inv;\\n}\\nint main(){\\n    vector<int> a={5,3,2,4,1};\\n    cout<<mergeCount(a,0,(int)a.size()-1)<<endl;return 0;\\n}',
        "expectedOutput": "10",
    },
    # C13: Kth Smallest
    {
        "title": "🎲 Kth Smallest · 第 K 小",
        "description": "Find kth smallest element using quickselect.\\n用快速选择找第k小元素。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint kthSmallest(vector<int> arr, int k) {\\n    // Quickselect\\n    return 0;\\n}\\nint main() {\\n    cout << kthSmallest({3,1,4,1,5,9,2,6}, 4) << endl;\\n    cout << kthSmallest({7,2,1,8,6,3,5,4}, 2) << endl;\\n    return 0;\\n}',
        "hint": "Partition around pivot, recurse into the correct side. 围绕枢轴分区，递归正确的一侧。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint qselect(vector<int>& a,int lo,int hi,int k){\\n    int pivot=a[hi],i=lo;\\n    for(int j=lo;j<hi;j++)if(a[j]<=pivot)swap(a[i++],a[j]);\\n    swap(a[i],a[hi]);\\n    if(i==k)return a[i];if(i>k)return qselect(a,lo,i-1,k);return qselect(a,i+1,hi,k);\\n}\\nint main(){\\n    vector<int> a1={3,1,4,1,5,9,2,6};cout<<qselect(a1,0,(int)a1.size()-1,3)<<endl;\\n    vector<int> a2={7,2,1,8,6,3,5,4};cout<<qselect(a2,0,(int)a2.size()-1,1)<<endl;\\n    return 0;\\n}',
        "expectedOutput": "7\\n3",
    },
    # C14: Three-Way Partition - need to check expected output format
    {
        "title": "🔀 Three-Way Partition · 三路分区",
        "description": "Partition array into three parts: less, equal, greater than pivot.\\n将数组分为小于、等于、大于枢轴三部分。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {4,9,4,4,1,9,4,4,9,4,4,1,4};\\n    int pivot = 4;\\n    // Three-way partition\\n    return 0;\\n}',
        "hint": "Separate into three vectors: less, equal, greater. 分成三个向量：小于、等于、大于。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<int> arr={4,9,4,4,1,9,4,4,9,4,4,1,4};int pivot=4;\\n    vector<int> lo,eq,hi;\\n    for(int x:arr){if(x<pivot)lo.push_back(x);else if(x==pivot)eq.push_back(x);else hi.push_back(x);}\\n    auto pr=[](vector<int>&v){cout<<"[";for(int i=0;i<(int)v.size();i++){if(i)cout<<", ";cout<<v[i];}cout<<"]";};\\n    pr(lo);cout<<endl;pr(eq);cout<<endl;pr(hi);cout<<endl;return 0;\\n}',
        "expectedOutput": "[1, 1]\\n[4, 4, 4, 4, 4, 4, 4, 4]\\n[9, 9, 9]",
    },
    # C15: Counting Sort
    {
        "title": "📊 Counting Sort · 计数排序",
        "description": "Implement counting sort for integers in range [0, k].\\n实现计数排序。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvector<int> countingSort(vector<int>& arr, int k) {\\n    // Counting sort\\n    return {};\\n}\\nint main() {\\n    vector<int> arr = {4,2,2,8,3,3,1};\\n    auto res = countingSort(arr, 8);\\n    return 0;\\n}',
        "hint": "Count occurrences, then reconstruct. 计数后重建。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<int> arr={4,2,2,8,3,3,1};int k=8;\\n    vector<int> count(k+1,0);\\n    for(int x:arr)count[x]++;\\n    vector<int> res;\\n    for(int i=0;i<=k;i++)for(int j=0;j<count[i];j++)res.push_back(i);\\n    cout<<"[";for(int i=0;i<(int)res.size();i++){if(i)cout<<", ";cout<<res[i];}cout<<"]"<<endl;return 0;\\n}',
        "expectedOutput": "[1, 2, 2, 3, 3, 4, 8]",
    },
    # C16: Sort Olympics
    {
        "title": "🏆 Sort Olympics · 排序奥运会",
        "description": "Implement bubble sort, insertion sort, and selection sort.\\n实现冒泡、插入和选择排序。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<int> data = {64,34,25,12,22,11,90};\\n    // Implement three sorts\\n    return 0;\\n}',
        "hint": "Bubble: swap adjacent; Insertion: insert into sorted prefix; Selection: find min. 三种基本排序。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvoid pr(vector<int>&v){cout<<"[";for(int i=0;i<(int)v.size();i++){if(i)cout<<", ";cout<<v[i];}cout<<"]"<<endl;}\\nint main(){\\n    vector<int> data={64,34,25,12,22,11,90};\\n    auto a=data;for(int i=0;i<(int)a.size();i++)for(int j=0;j<(int)a.size()-1-i;j++)if(a[j]>a[j+1])swap(a[j],a[j+1]);pr(a);\\n    auto b=data;for(int i=1;i<(int)b.size();i++){int key=b[i],j=i-1;while(j>=0&&b[j]>key){b[j+1]=b[j];j--;}b[j+1]=key;}pr(b);\\n    auto c=data;for(int i=0;i<(int)c.size();i++){int mn=i;for(int j=i+1;j<(int)c.size();j++)if(c[j]<c[mn])mn=j;swap(c[i],c[mn]);}pr(c);\\n    return 0;\\n}',
        "expectedOutput": "[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]",
    },
    # C17: Recursive Power
    {
        "title": "🌀 Recursive Power · 递归幂",
        "description": "Compute base^exp using recursion.\\n用递归计算幂。",
        "starterCode": '#include <iostream>\\nusing namespace std;\\nlong long power(int base, int exp) {\\n    // Recursive power\\n    return 0;\\n}\\nint main() {\\n    cout << power(2, 10) << endl;\\n    cout << power(3, 0) << endl;\\n    cout << power(5, 3) << endl;\\n    return 0;\\n}',
        "hint": "Base case: exp==0 returns 1. Recurse: base * power(base, exp-1). 基本情况和递归。",
        "solution": '#include <iostream>\\nusing namespace std;\\nlong long power(int base,int exp){if(exp==0)return 1;return base*power(base,exp-1);}\\nint main(){\\n    cout<<power(2,10)<<endl;\\n    cout<<power(3,0)<<endl;\\n    cout<<power(5,3)<<endl;return 0;\\n}',
        "expectedOutput": "1024\\n1\\n125",
    },
    # C18: Flatten Nested List
    {
        "title": "🔢 Flatten Nested List · 展平嵌套列表",
        "description": "Flatten a nested structure recursively.\\n递归展平嵌套结构。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <variant>\\nusing namespace std;\\nint main() {\\n    // Simulate nested: [1,[2,[3,4],[5]],6,[7]]\\n    // Flatten to [1,2,3,4,5,6,7]\\n    return 0;\\n}',
        "hint": "Use a tree-like structure or manual recursion. 用树结构或手动递归。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nstruct Node{int val;vector<Node*>children;bool isLeaf;Node(int v):val(v),isLeaf(true){}Node(vector<Node*>c):val(0),children(c),isLeaf(false){}};\\nvoid flatten(Node*n,vector<int>&res){if(n->isLeaf){res.push_back(n->val);return;}for(auto*c:n->children)flatten(c,res);}\\nint main(){\\n    auto*n=new Node({new Node(1),new Node({new Node(2),new Node({new Node(3),new Node(4)}),new Node({new Node(5)})}),new Node(6),new Node({new Node(7)})});\\n    vector<int>res;flatten(n,res);\\n    cout<<"[";for(int i=0;i<(int)res.size();i++){if(i)cout<<", ";cout<<res[i];}cout<<"]"<<endl;return 0;\\n}',
        "expectedOutput": "[1, 2, 3, 4, 5, 6, 7]",
    },
    # C19: Binary Tree Depth
    {
        "title": "🌳 Binary Tree Depth · 二叉树深度",
        "description": "Find the maximum depth of a binary tree.\\n找到二叉树的最大深度。",
        "starterCode": '#include <iostream>\\nusing namespace std;\\nstruct TreeNode{int val;TreeNode*left,*right;TreeNode(int v):val(v),left(nullptr),right(nullptr){}};\\nint maxDepth(TreeNode*root){\\n    // Your code\\n    return 0;\\n}\\nint main(){\\n    return 0;\\n}',
        "hint": "If null return 0, else 1 + max(left depth, right depth). 空返回0，否则1+max(左深度,右深度)。",
        "solution": '#include <iostream>\\nusing namespace std;\\nstruct TreeNode{int val;TreeNode*left,*right;TreeNode(int v):val(v),left(nullptr),right(nullptr){}};\\nint maxDepth(TreeNode*r){if(!r)return 0;return 1+max(maxDepth(r->left),maxDepth(r->right));}\\nint main(){\\n    auto*r=new TreeNode(1);r->left=new TreeNode(2);r->right=new TreeNode(3);r->left->left=new TreeNode(4);r->right->right=new TreeNode(5);\\n    cout<<maxDepth(r)<<endl;\\n    cout<<maxDepth(nullptr)<<endl;return 0;\\n}',
        "expectedOutput": "3\\n0",
    },
    # C20: Tower of Hanoi
    {
        "title": "🔄 Tower of Hanoi · 汉诺塔",
        "description": "Solve Tower of Hanoi for n disks.\\n解决n个盘的汉诺塔问题。",
        "starterCode": '#include <iostream>\\n#include <string>\\nusing namespace std;\\nvoid hanoi(int n, string src, string tgt, string aux) {\\n    // Your code\\n}\\nint main() {\\n    hanoi(3, "A", "C", "B");\\n    return 0;\\n}',
        "hint": "Move n-1 to aux, move nth to target, move n-1 from aux to target. 经典递归。",
        "solution": '#include <iostream>\\n#include <string>\\nusing namespace std;\\nvoid hanoi(int n,string src,string tgt,string aux){\\n    if(n==1){cout<<"Move disk 1 from "<<src<<" to "<<tgt<<endl;return;}\\n    hanoi(n-1,src,aux,tgt);\\n    cout<<"Move disk "<<n<<" from "<<src<<" to "<<tgt<<endl;\\n    hanoi(n-1,aux,tgt,src);\\n}\\nint main(){hanoi(3,"A","C","B");return 0;}',
        "expectedOutput": "Move disk 1 from A to C\\nMove disk 2 from A to B\\nMove disk 1 from C to B\\nMove disk 3 from A to C\\nMove disk 1 from B to A\\nMove disk 2 from B to C\\nMove disk 1 from A to C",
    },
    # C21: Combination Sum
    {
        "title": "🔤 Combination Sum · 组合总和",
        "description": "Find all unique combinations that sum to target.\\n找到所有和为目标值的唯一组合。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<int> cands = {2,3,6,7};\\n    int target = 7;\\n    // Find combinations\\n    return 0;\\n}',
        "hint": "Backtracking: try each candidate, allow reuse from same index. 回溯：每个候选可重复使用。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvoid bt(vector<int>&c,int t,int start,vector<int>&cur,vector<vector<int>>&res){\\n    if(t==0){res.push_back(cur);return;}\\n    for(int i=start;i<(int)c.size();i++){if(c[i]>t)break;cur.push_back(c[i]);bt(c,t-c[i],i,cur,res);cur.pop_back();}\\n}\\nint main(){\\n    vector<int>c={2,3,6,7};int target=7;\\n    vector<vector<int>>res;vector<int>cur;bt(c,target,0,cur,res);\\n    for(auto&v:res){cout<<"[";for(int i=0;i<(int)v.size();i++){if(i)cout<<", ";cout<<v[i];}cout<<"]"<<endl;}return 0;\\n}',
        "expectedOutput": "[2, 2, 3]\\n[7]",
    },
    # C22: 4x4 Sudoku Solver
    {
        "title": "🧩 4×4 Sudoku Solver · 4×4 数独求解",
        "description": "Solve a 4x4 Sudoku puzzle using backtracking.\\n用回溯法解4x4数独。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<vector<int>> board = {{0,0,0,0},{0,0,0,0},{0,0,0,0},{0,0,0,0}};\\n    // Solve 4x4 sudoku\\n    return 0;\\n}',
        "hint": "Try 1-4 for each empty cell, check row/col/2x2 box constraints. 每个空格尝试1-4，检查约束。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nbool valid(vector<vector<int>>&b,int r,int c,int n){\\n    for(int i=0;i<4;i++)if(b[r][i]==n||b[i][c]==n)return false;\\n    int br=(r/2)*2,bc=(c/2)*2;\\n    for(int i=br;i<br+2;i++)for(int j=bc;j<bc+2;j++)if(b[i][j]==n)return false;\\n    return true;\\n}\\nbool solve(vector<vector<int>>&b){\\n    for(int r=0;r<4;r++)for(int c=0;c<4;c++)if(b[r][c]==0){\\n        for(int n=1;n<=4;n++)if(valid(b,r,c,n)){b[r][c]=n;if(solve(b))return true;b[r][c]=0;}return false;}\\n    return true;\\n}\\nint main(){\\n    vector<vector<int>>b={{0,0,0,0},{0,0,0,0},{0,0,0,0},{0,0,0,0}};\\n    solve(b);\\n    cout<<(b[0][0]!=0?"True":"False")<<endl;\\n    for(auto&row:b){cout<<"[";for(int i=0;i<4;i++){if(i)cout<<", ";cout<<row[i];}cout<<"]"<<endl;}return 0;\\n}',
        "expectedOutput": "True\\n[1, 2, 3, 4]\\n[3, 4, 1, 2]\\n[2, 1, 4, 3]\\n[4, 3, 2, 1]",
    },
    # C23: Closest Pair
    {
        "title": "🔢 Closest Pair · 最近数对",
        "description": "Find the pair of numbers with smallest absolute difference.\\n找到绝对差值最小的数对。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <algorithm>\\nusing namespace std;\\nint main() {\\n    vector<int> arr = {10,2,14,7,8,3};\\n    // Find closest pair\\n    return 0;\\n}',
        "hint": "Sort first, then check adjacent pairs. 先排序再检查相邻对。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <algorithm>\\n#include <climits>\\nusing namespace std;\\nint main(){\\n    vector<int>a={10,2,14,7,8,3};sort(a.begin(),a.end());\\n    int best=INT_MAX,bi=0;\\n    for(int i=0;i<(int)a.size()-1;i++)if(a[i+1]-a[i]<best){best=a[i+1]-a[i];bi=i;}\\n    cout<<"("<<a[bi]<<", "<<a[bi+1]<<")"<<endl;return 0;\\n}',
        "expectedOutput": "(7, 8)",
    },
    # C24: Majority Element
    {
        "title": "⚡ Majority Element · 多数元素",
        "description": "Find the majority element using Boyer-Moore voting.\\n用Boyer-Moore投票找多数元素。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint majority(vector<int>& arr) {\\n    // Boyer-Moore voting\\n    return 0;\\n}\\nint main() {\\n    vector<int> a1 = {3,3,4,2,3,3,3};\\n    vector<int> a2 = {2,2,1,1,2};\\n    cout << majority(a1) << endl;\\n    cout << majority(a2) << endl;\\n    return 0;\\n}',
        "hint": "Track candidate and count. When count=0, switch candidate. 追踪候选和计数。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint majority(vector<int>&a){int cand=0,cnt=0;for(int x:a){if(cnt==0)cand=x;cnt+=(x==cand)?1:-1;}return cand;}\\nint main(){\\n    vector<int>a1={3,3,4,2,3,3,3};vector<int>a2={2,2,1,1,2};\\n    cout<<majority(a1)<<endl;cout<<majority(a2)<<endl;return 0;\\n}',
        "expectedOutput": "3\\n2",
    },
    # C25: Tribonacci
    {
        "title": "🪙 Tribonacci · 三波那契",
        "description": "Compute first 10 Tribonacci numbers with memoization.\\n用记忆化计算前10个三波那契数。",
        "starterCode": '#include <iostream>\\n#include <unordered_map>\\nusing namespace std;\\nint main() {\\n    // Tribonacci: T(0)=0, T(1)=1, T(2)=1, T(n)=T(n-1)+T(n-2)+T(n-3)\\n    return 0;\\n}',
        "hint": "Similar to Fibonacci but sum of last 3. Memoize results. 类似斐波那契但求最后3个之和。",
        "solution": '#include <iostream>\\n#include <unordered_map>\\nusing namespace std;\\nunordered_map<int,long long>memo;\\nlong long trib(int n){if(memo.count(n))return memo[n];if(n==0)return 0;if(n<=2)return 1;return memo[n]=trib(n-1)+trib(n-2)+trib(n-3);}\\nint main(){for(int i=0;i<10;i++)cout<<trib(i)<<" ";cout<<endl;return 0;}',
        "expectedOutput": "0 1 1 2 4 7 13 24 44 81 ",
    },
    # C26: House Robber
    {
        "title": "🏠 House Robber · 打家劫舍",
        "description": "Maximum money without robbing adjacent houses.\\n不抢相邻房屋的最大金额。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint rob(vector<int>& houses) {\\n    // DP solution\\n    return 0;\\n}\\nint main() {\\n    vector<int> h1 = {2,7,9,3,1};\\n    vector<int> h2 = {1,2,3,1};\\n    cout << rob(h1) << endl;\\n    cout << rob(h2) << endl;\\n    return 0;\\n}',
        "hint": "dp[i] = max(dp[i-1], dp[i-2]+houses[i]). 经典DP递推。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint rob(vector<int>&h){\\n    if(h.empty())return 0;if(h.size()==1)return h[0];\\n    vector<int>dp(h.size());dp[0]=h[0];dp[1]=max(h[0],h[1]);\\n    for(int i=2;i<(int)h.size();i++)dp[i]=max(dp[i-1],dp[i-2]+h[i]);\\n    return dp.back();\\n}\\nint main(){\\n    vector<int>h1={2,7,9,3,1};vector<int>h2={1,2,3,1};\\n    cout<<rob(h1)<<endl;cout<<rob(h2)<<endl;return 0;\\n}',
        "expectedOutput": "12\\n4",
    },
    # C27: Coin Combinations
    {
        "title": "🪙 Coin Combinations · 硬币组合",
        "description": "Count the number of ways to make change.\\n计算找零的方式数。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint coinWays(vector<int>& coins, int amount) {\\n    // DP coin change combinations\\n    return 0;\\n}\\nint main() {\\n    vector<int> coins = {1,2,5};\\n    cout << coinWays(coins, 5) << endl;\\n    cout << coinWays(coins, 3) << endl;\\n    return 0;\\n}',
        "hint": "Process coins one by one. dp[i] += dp[i-coin]. 逐个处理硬币，dp[i]+=dp[i-coin]。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint coinWays(vector<int>&coins,int amount){\\n    vector<int>dp(amount+1,0);dp[0]=1;\\n    for(int c:coins)for(int i=c;i<=amount;i++)dp[i]+=dp[i-c];\\n    return dp[amount];\\n}\\nint main(){\\n    vector<int>coins={1,2,5};\\n    cout<<coinWays(coins,5)<<endl;cout<<coinWays(coins,3)<<endl;return 0;\\n}',
        "expectedOutput": "4\\n2",
    },
    # C28: Maximum Subarray DP
    {
        "title": "📊 Maximum Subarray DP · 最大子数组 DP",
        "description": "Find maximum subarray sum using Kadane's algorithm.\\n用Kadane算法找最大子数组和。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint maxSub(vector<int>& arr) {\\n    // Kadane\\n    return 0;\\n}\\nint main() {\\n    vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};\\n    cout << maxSub(arr) << endl;\\n    return 0;\\n}',
        "hint": "Track current sum and best sum. Reset current if negative. 跟踪当前和最佳和。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint maxSub(vector<int>&a){int dp=a[0],best=a[0];for(int i=1;i<(int)a.size();i++){dp=max(a[i],dp+a[i]);best=max(best,dp);}return best;}\\nint main(){\\n    vector<int>a={-2,1,-3,4,-1,2,1,-5,4};cout<<maxSub(a)<<endl;return 0;\\n}',
        "expectedOutput": "6",
    },
    # C29: Unbounded Knapsack
    {
        "title": "🎒 Unbounded Knapsack · 完全背包",
        "description": "Maximize value with unlimited item copies.\\n无限物品副本的最大价值。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    // items: (weight, value) = (2,3), (3,4), (4,5), (5,7)\\n    int capacity = 7;\\n    // Unbounded knapsack\\n    return 0;\\n}',
        "hint": "dp[w] = max(dp[w], dp[w-wt]+val) for each item. dp[w]=max(dp[w], dp[w-wt]+val)。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<pair<int,int>>items={{2,3},{3,4},{4,5},{5,7}};int cap=7;\\n    vector<int>dp(cap+1,0);\\n    for(int w=1;w<=cap;w++)for(auto&[wt,val]:items)if(wt<=w)dp[w]=max(dp[w],dp[w-wt]+val);\\n    cout<<dp[cap]<<endl;return 0;\\n}',
        "expectedOutput": "10",
    },
    # C30: Edit Distance
    {
        "title": "📝 Edit Distance · 编辑距离",
        "description": "Find minimum edit distance between two strings.\\n计算两个字符串的最小编辑距离。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <string>\\nusing namespace std;\\nint editDist(string s1, string s2) {\\n    // DP edit distance\\n    return 0;\\n}\\nint main() {\\n    cout << editDist("kitten", "sitting") << endl;\\n    cout << editDist("", "abc") << endl;\\n    return 0;\\n}',
        "hint": "2D DP: match=diagonal, insert/delete/replace=min of three neighbors+1. 二维DP。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <string>\\nusing namespace std;\\nint editDist(string a,string b){\\n    int m=a.size(),n=b.size();vector<vector<int>>dp(m+1,vector<int>(n+1,0));\\n    for(int i=0;i<=m;i++)dp[i][0]=i;for(int j=0;j<=n;j++)dp[0][j]=j;\\n    for(int i=1;i<=m;i++)for(int j=1;j<=n;j++){\\n        if(a[i-1]==b[j-1])dp[i][j]=dp[i-1][j-1];\\n        else dp[i][j]=1+min({dp[i-1][j],dp[i][j-1],dp[i-1][j-1]});\\n    }return dp[m][n];\\n}\\nint main(){cout<<editDist("kitten","sitting")<<endl;cout<<editDist("","abc")<<endl;return 0;}',
        "expectedOutput": "3\\n0",
    },
    # C31: Maximum Gold
    {
        "title": "💰 Maximum Gold · 最大黄金",
        "description": "Find maximum gold collectible from top-left to bottom-right.\\n从左上到右下收集最多黄金。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<vector<int>> grid = {{1,3,1},{2,1,1},{4,2,1}};\\n    // DP: only move right or down\\n    return 0;\\n}',
        "hint": "dp[i][j] = grid[i][j] + max(dp[i-1][j], dp[i][j-1]). 只能右移或下移。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<vector<int>>g={{1,3,1},{2,1,1},{4,2,1}};\\n    int m=g.size(),n=g[0].size();\\n    vector<vector<int>>dp(m,vector<int>(n,0));dp[0][0]=g[0][0];\\n    for(int i=1;i<m;i++)dp[i][0]=dp[i-1][0]+g[i][0];\\n    for(int j=1;j<n;j++)dp[0][j]=dp[0][j-1]+g[0][j];\\n    for(int i=1;i<m;i++)for(int j=1;j<n;j++)dp[i][j]=g[i][j]+max(dp[i-1][j],dp[i][j-1]);\\n    cout<<dp[m-1][n-1]<<endl;return 0;\\n}',
        "expectedOutput": "12",
    },
    # C32: Maximal Square
    {
        "title": "🔲 Maximal Square · 最大正方形",
        "description": "Find area of largest square of 1s in a binary matrix.\\n在二值矩阵中找最大全1正方形的面积。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main() {\\n    vector<vector<int>> grid = {{1,0,1,0,0},{1,0,1,1,1},{1,1,1,1,1},{1,0,0,1,0}};\\n    // Find maximal square area\\n    return 0;\\n}',
        "hint": "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if grid[i][j]==1. DP递推。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint main(){\\n    vector<vector<int>>g={{1,0,1,0,0},{1,0,1,1,1},{1,1,1,1,1},{1,0,0,1,0}};\\n    int m=g.size(),n=g[0].size(),maxS=0;\\n    vector<vector<int>>dp(m,vector<int>(n,0));\\n    for(int i=0;i<m;i++)for(int j=0;j<n;j++){\\n        if(g[i][j]==1){if(i==0||j==0)dp[i][j]=1;else dp[i][j]=min({dp[i-1][j],dp[i][j-1],dp[i-1][j-1]})+1;}\\n        maxS=max(maxS,dp[i][j]);\\n    }cout<<maxS*maxS<<endl;return 0;\\n}',
        "expectedOutput": "4",
    },
    # C33: Flood Fill
    {
        "title": "🌊 Flood Fill · 洪水填充",
        "description": "Implement flood fill algorithm on a grid.\\n在网格上实现洪水填充。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvoid floodFill(vector<vector<int>>& grid, int r, int c, int newColor) {\\n    // DFS flood fill\\n}\\nint main() {\\n    vector<vector<int>> grid = {{1,1,1},{1,1,0},{1,0,1}};\\n    floodFill(grid, 0, 0, 2);\\n    return 0;\\n}',
        "hint": "DFS from (r,c), change matching cells to new color. 从(r,c)开始DFS，改变匹配的单元格。",
        "solution": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nvoid ff(vector<vector<int>>&g,int r,int c,int orig,int nc){\\n    if(r<0||r>=(int)g.size()||c<0||c>=(int)g[0].size()||g[r][c]!=orig)return;\\n    g[r][c]=nc;ff(g,r+1,c,orig,nc);ff(g,r-1,c,orig,nc);ff(g,r,c+1,orig,nc);ff(g,r,c-1,orig,nc);\\n}\\nvoid floodFill(vector<vector<int>>&g,int r,int c,int nc){int orig=g[r][c];if(orig==nc)return;ff(g,r,c,orig,nc);}\\nint main(){\\n    vector<vector<int>>g={{1,1,1},{1,1,0},{1,0,1}};floodFill(g,0,0,2);\\n    for(auto&row:g){cout<<"[";for(int i=0;i<(int)row.size();i++){if(i)cout<<", ";cout<<row[i];}cout<<"]"<<endl;}return 0;\\n}',
        "expectedOutput": "[2, 2, 2]\\n[2, 2, 0]\\n[2, 0, 1]",
    },
    # C34: Graph Has Path
    {
        "title": "🔗 Graph Has Path · 图是否有路径",
        "description": "Check if a path exists between two nodes using DFS.\\n用DFS检查两节点间是否有路径。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <unordered_set>\\nusing namespace std;\\nbool hasPath(vector<vector<int>>& adj, int start, int end) {\\n    // DFS\\n    return false;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "DFS/BFS from start, check if end is reachable. Track visited nodes. 从起点DFS/BFS。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <unordered_set>\\n#include <stack>\\nusing namespace std;\\nbool hasPath(vector<vector<int>>&adj,int s,int e){\\n    unordered_set<int>vis;stack<int>st;st.push(s);\\n    while(!st.empty()){int n=st.top();st.pop();if(n==e)return true;if(vis.count(n))continue;vis.insert(n);for(int nb:adj[n])st.push(nb);}\\n    return false;\\n}\\nint main(){\\n    vector<vector<int>>adj={{1,2},{0,3},{0},{1}};\\n    cout<<(hasPath(adj,0,3)?"True":"False")<<endl;\\n    cout<<(hasPath(adj,0,4)?"True":"False")<<endl;return 0;\\n}',
        "expectedOutput": "True\\nFalse",
    },
    # C35: Network Delay
    {
        "title": "🗺️ Network Delay · 网络延迟",
        "description": "Find maximum shortest path (Dijkstra) from source.\\n用Dijkstra找从源点的最大最短路径。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nint networkDelay(int n, vector<tuple<int,int,int>>& edges, int src) {\\n    // Dijkstra\\n    return 0;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "Dijkstra with priority queue. Return max distance. 用优先队列的Dijkstra，返回最大距离。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <queue>\\n#include <unordered_map>\\nusing namespace std;\\nint networkDelay(int n,vector<tuple<int,int,int>>&edges,int src){\\n    unordered_map<int,vector<pair<int,int>>>adj;\\n    for(auto&[u,v,w]:edges)adj[u].push_back({v,w});\\n    unordered_map<int,int>dist;dist[src]=0;\\n    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>>pq;pq.push({0,src});\\n    while(!pq.empty()){auto[d,u]=pq.top();pq.pop();if(d>dist[u])continue;for(auto&[v,w]:adj[u]){if(!dist.count(v)||d+w<dist[v]){dist[v]=d+w;pq.push({dist[v],v});}}}\\n    if((int)dist.size()<n)return -1;int mx=0;for(auto&[k,v]:dist)mx=max(mx,v);return mx;\\n}\\nint main(){\\n    vector<tuple<int,int,int>>edges={{0,1,1},{0,2,4},{1,2,2},{2,3,1}};\\n    cout<<networkDelay(4,edges,0)<<endl;return 0;\\n}',
        "expectedOutput": "4",
    },
    # C36: Cheapest Flight
    {
        "title": "🏙️ Cheapest Flight · 最便宜航班",
        "description": "Find cheapest flight with at most k stops (Bellman-Ford).\\n最多k次中转的最便宜航班。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <climits>\\nusing namespace std;\\nint cheapestFlight(int n, vector<tuple<int,int,int>>& flights, int src, int dst, int k) {\\n    // Bellman-Ford with k+1 iterations\\n    return 0;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "Run Bellman-Ford for k+1 iterations. Use temp copy each round. 运行k+1轮Bellman-Ford。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <climits>\\nusing namespace std;\\nint cheapestFlight(int n,vector<tuple<int,int,int>>&flights,int src,int dst,int k){\\n    vector<int>prices(n,INT_MAX);prices[src]=0;\\n    for(int i=0;i<=k;i++){auto tmp=prices;for(auto&[u,v,w]:flights)if(prices[u]!=INT_MAX)tmp[v]=min(tmp[v],prices[u]+w);prices=tmp;}\\n    return prices[dst]==INT_MAX?-1:prices[dst];\\n}\\nint main(){\\n    vector<tuple<int,int,int>>f={{0,1,100},{1,2,100},{0,2,500}};\\n    cout<<cheapestFlight(3,f,0,2,1)<<endl;\\n    cout<<cheapestFlight(3,f,0,2,0)<<endl;return 0;\\n}',
        "expectedOutput": "200\\n500",
    },
    # C37: Course Schedule
    {
        "title": "📋 Course Schedule · 课程安排",
        "description": "Check if all courses can be finished (topological sort).\\n检查是否能完成所有课程（拓扑排序）。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nbool canFinish(int n, vector<pair<int,int>>& prereqs) {\\n    // Kahn topological sort\\n    return false;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "Kahn\\'s algorithm: process nodes with in-degree 0. Kahn算法：处理入度为0的节点。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nbool canFinish(int n,vector<pair<int,int>>&prereqs){\\n    vector<vector<int>>adj(n);vector<int>indeg(n,0);\\n    for(auto&[c,p]:prereqs){adj[p].push_back(c);indeg[c]++;}\\n    queue<int>q;for(int i=0;i<n;i++)if(indeg[i]==0)q.push(i);\\n    int cnt=0;while(!q.empty()){int u=q.front();q.pop();cnt++;for(int v:adj[u])if(--indeg[v]==0)q.push(v);}\\n    return cnt==n;\\n}\\nint main(){\\n    vector<pair<int,int>>p1={{1,0},{2,1},{3,2}};\\n    vector<pair<int,int>>p2={{1,0},{0,1}};\\n    cout<<(canFinish(4,p1)?"True":"False")<<endl;\\n    cout<<(canFinish(2,p2)?"True":"False")<<endl;return 0;\\n}',
        "expectedOutput": "True\\nFalse",
    },
    # C38: Longest Path in DAG
    {
        "title": "📊 Longest Path in DAG · DAG 最长路径",
        "description": "Find longest path in a weighted DAG using topological sort.\\n用拓扑排序找加权DAG的最长路径。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nint longestPath(int n, vector<tuple<int,int,int>>& edges) {\\n    // Topological sort + DP\\n    return 0;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "Topological sort, then relax edges in order. 拓扑排序后按序松弛边。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <queue>\\nusing namespace std;\\nint longestPath(int n,vector<tuple<int,int,int>>&edges){\\n    vector<vector<pair<int,int>>>adj(n);vector<int>indeg(n,0);\\n    for(auto&[u,v,w]:edges){adj[u].push_back({v,w});indeg[v]++;}\\n    queue<int>q;for(int i=0;i<n;i++)if(indeg[i]==0)q.push(i);\\n    vector<int>dist(n,0);\\n    while(!q.empty()){int u=q.front();q.pop();for(auto&[v,w]:adj[u]){dist[v]=max(dist[v],dist[u]+w);if(--indeg[v]==0)q.push(v);}}\\n    return *max_element(dist.begin(),dist.end());\\n}\\nint main(){\\n    vector<tuple<int,int,int>>edges={{0,1,3},{0,2,2},{1,3,4},{2,3,1}};\\n    cout<<longestPath(4,edges)<<endl;return 0;\\n}',
        "expectedOutput": "7",
    },
    # C39: Bridge Finder
    {
        "title": "🌉 Bridge Finder · 桥查找器",
        "description": "Count bridges in an undirected graph (brute force).\\n计算无向图中的桥数（暴力法）。",
        "starterCode": '#include <iostream>\\n#include <vector>\\nusing namespace std;\\nint countBridges(int n, vector<pair<int,int>>& edges) {\\n    // Try removing each edge, check connectivity\\n    return 0;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "Remove each edge, check if graph stays connected. 逐条移除边检查连通性。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <unordered_set>\\nusing namespace std;\\nint countBridges(int n,vector<pair<int,int>>&edges){\\n    int bridges=0;\\n    for(int skip=0;skip<(int)edges.size();skip++){\\n        vector<vector<int>>adj(n);\\n        for(int i=0;i<(int)edges.size();i++)if(i!=skip){adj[edges[i].first].push_back(edges[i].second);adj[edges[i].second].push_back(edges[i].first);}\\n        unordered_set<int>vis;vector<int>st={0};\\n        while(!st.empty()){int u=st.back();st.pop_back();if(vis.count(u))continue;vis.insert(u);for(int v:adj[u])st.push(v);}\\n        if((int)vis.size()<n)bridges++;\\n    }return bridges;\\n}\\nint main(){\\n    vector<pair<int,int>>edges={{0,1},{1,2},{2,0},{1,3}};\\n    cout<<countBridges(4,edges)<<endl;return 0;\\n}',
        "expectedOutput": "1",
    },
    # C40: Strongly Connected
    {
        "title": "🔄 Strongly Connected · 强连通检测",
        "description": "Check if a directed graph is strongly connected.\\n检查有向图是否强连通。",
        "starterCode": '#include <iostream>\\n#include <vector>\\n#include <unordered_set>\\nusing namespace std;\\nbool isStronglyConnected(int n, vector<pair<int,int>>& edges) {\\n    // DFS on graph and reverse graph\\n    return false;\\n}\\nint main() {\\n    return 0;\\n}',
        "hint": "DFS from node 0 on original and reversed graph. Both must visit all nodes. 对原图和反图DFS。",
        "solution": '#include <iostream>\\n#include <vector>\\n#include <unordered_set>\\n#include <stack>\\nusing namespace std;\\nbool isStronglyConnected(int n,vector<pair<int,int>>&edges){\\n    vector<vector<int>>adj(n),radj(n);\\n    for(auto&[u,v]:edges){adj[u].push_back(v);radj[v].push_back(u);}\\n    auto dfs=[&](vector<vector<int>>&g){unordered_set<int>vis;stack<int>st;st.push(0);while(!st.empty()){int u=st.top();st.pop();if(vis.count(u))continue;vis.insert(u);for(int v:g[u])st.push(v);}return(int)vis.size()==n;};\\n    return dfs(adj)&&dfs(radj);\\n}\\nint main(){\\n    vector<pair<int,int>>e1={{0,1},{1,2},{2,0}};\\n    vector<pair<int,int>>e2={{0,1},{1,2}};\\n    cout<<(isStronglyConnected(3,e1)?"True":"False")<<endl;\\n    cout<<(isStronglyConnected(3,e2)?"True":"False")<<endl;return 0;\\n}',
        "expectedOutput": "True\\nFalse",
    },
]

# Now write the insertion script
with open('src/data/alg-lessons.ts', 'r') as f:
    lines = f.readlines()

# Find challenge block end positions (the closing `},` of each challenge block)
# We need to find `challenge: {` then find the matching closing `},`
import re

challenge_starts = []
for i, line in enumerate(lines):
    if re.match(r'\s+challenge:\s*\{', line):
        challenge_starts.append(i)

print(f"Found {len(challenge_starts)} challenge blocks")

# For each challenge block, find its closing `},`
# The challenge block starts with `challenge: {` and we need to find the matching close
insert_positions = []  # (line_number, cpp_challenge_index)
for idx, start in enumerate(challenge_starts):
    depth = 0
    for j in range(start, len(lines)):
        depth += lines[j].count('{') - lines[j].count('}')
        if depth == 0:
            insert_positions.append((j, idx))
            break

print(f"Found {len(insert_positions)} insert positions")

# Now insert challengeCpp blocks after each challenge block's closing line
# Work backwards to preserve line numbers
for pos, cidx in reversed(insert_positions):
    c = cpp_challenges[cidx]
    # Build the challengeCpp block with proper indentation (6 spaces)
    block = f'''      challengeCpp: {{
        title: "{c['title']}",
        description: "{c['description']}",
        starterCode: "{c['starterCode']}",
        hint: "{c['hint']}",
        solution: "{c['solution']}",
        expectedOutput: "{c['expectedOutput']}",
      }},
'''
    # Insert after the closing line of challenge
    lines.insert(pos + 1, block)

with open('src/data/alg-lessons.ts', 'w') as f:
    f.writelines(lines)

print("Done! Written all challengeCpp blocks.")
