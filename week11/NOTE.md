### 两种数据结构
用class写方便测试
#### Sorted
删除数组中的一个元素，如果不需要考虑顺序，则可以将最后一个元素的值赋给它，然后删除最后一个元素
#### BinaryHeap
二叉堆一般用数组来表示。如果根节点在数组中的位置是1，第n个位置的子节点分别在2n和 2n+1。因此，第1个位置的子节点在2和3，第2个位置的子节点在4和5,以此类推。