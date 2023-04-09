#include <iostream>
#include <queue>
using namespace std;

// arrays functions
struct Array // array class!!
{
    int *a;
    int size;
    int length;
};
void display(struct Array &a) // To Display Array Elements!!!
{
    int i;
    cout << "\nThe current array is: ";
    for (i = 0; i < a.length; i++)
        cout << a.a[i] << " ";
    cout << endl
         << endl;
}
void add(struct Array &a, int x) // Function to Add element at last in array!!!!!
{
    a.a[a.length] = x;
    a.length++;
}
void insert(struct Array &a, int index, int x) // Function to insert element in Array at given index !!!!

{
    for (int i = a.length; i > index; i--)
        a.a[i] = a.a[i - 1];
    a.a[index] = x;
    a.length++;
}
void dlt(struct Array &a, int index) // functions To Delete Element In Array!!!
{
    int x = a.a[index];
    for (int i = index; i < a.length; i++)
        a.a[i] = a.a[i + 1];
    a.length--;
    cout << "\n"
         << x << " is deleted!!\n";
}
int linear(struct Array &a, int key) // functions to search  in array!!
{

    for (int i = 0; i < a.length - 1; i++)
    {
        if (a.a[i] == key)
            return i;
    }
    return -1;
}
void isSorted(struct Array &a) // functions to sort  array!!
{
    for (int j = 1; j < a.length; j++)
    {
        for (int i = 0; i < a.length - j; i++)
        {
            if (a.a[i] > a.a[i + 1])
            {
                int temp = a.a[i + 1];
                a.a[i + 1] = a.a[i];
                a.a[i] = temp;
            }
        }
    }
}
int binary(struct Array &a, int key) // functions to search  in array!!
{
    isSorted(a);
    cout << "\n After sorting: ";
    display(a);
    int l = 0, h = a.length - 1, mid = (l + h) / 2;
    while (l <= h)
    {
        if (key == a.a[mid])
            return mid;
        else if (key < a.a[mid])
            h = mid - 1;
        else
            l = mid + 1;

        mid = (l + h) / 2;
    }
    return -1;
}
int get(struct Array &a, int index) // Function To get a number from array
{
    if (index < 0 || index > a.length - 1)
        return -1;
    else
        return a.a[index];
}
int set(struct Array &a, int index, int d) // Functions To change a number in array
{
    if (index < 0 || index >= a.length)
        return -1;
    else
        a.a[index] = d;
    return 1;
}

// link List functions
class node
{
public:
    int data;
    node *next;
};

class linkedlist
{
private:
    node *first;

public:
    linkedlist() // constructor
    {
        first = NULL;
    }
    // function define
    linkedlist(int A[], int n);
    ~linkedlist();
    void display();
    void insert(int index, int x);
    void Delete(int index);
    int length();
    int search(int x);
    void sort();
};

linkedlist::linkedlist(int A[], int n) // constructor
{
    node *last, *t;
    first = new node;
    first->data = A[0];
    first->next = NULL;
    last = first;
    for (int i = 1; i < n; i++)
    {
        t = new node;
        t->data = A[i];
        t->next = NULL;
        last->next = t;
        last = t;
    }
}
linkedlist::~linkedlist() // destructor
{
    node *p = first;
    while (first)
    {
        first = first->next;
        delete p;
        p = first;
    }
}
void linkedlist::display() // Fuction to display
{
    node *p = first;
    while (p)
    {
        cout << p->data << " ";
        p = p->next;
    }
}
int linkedlist::length() // Function to get length of linked list
{
    node *p = first;
    int len = 0;
    while (p)
    {
        len++;
        p = p->next;
    }
    return len;
}
void linkedlist::insert(int pos, int x) // Function to insert in link list
{
    node *curr = first;
    if (pos == 1)
    {
        curr = new node;
        curr->data = x;
        curr->next = first;
        first = curr;
    }
    else if (pos > 1)
    {
        int i = 1;

        for (int i = 1; i != pos - 1 && curr; i++)
            curr = curr->next;

        node *temp = new node;
        temp->data = x;
        temp->next = curr->next;
        curr->next = temp;
    }
}
void linkedlist::Delete(int data) // Function to delete node (by passing the data of node)
{

    node *curr = first;
    if (data == first->data)
    {
        first = first->next;
        cout << "Node having data " << curr->data << " is deleted\n";
        delete curr;
        return;
    }
    node *prev = NULL;
    while (curr->data != data && curr != NULL)
    {
        prev = curr;
        curr = curr->next;
    }
    if (curr == NULL)
    {
        return;
    }
    else
    {
        prev->next = curr->next;
        cout << "Node having data " << curr->data << " is deleted\n";
        delete curr;
        return;
    }
}
int linkedlist::search(int x) // Function to search in link list
{
    node *p = first;
    for (int i = 0; p != NULL; i++)
    {
        if (p->data == x)
        {
            return i + 1;
        }
        else
            p = p->next;
    }
    return -1;
}
void linkedlist::sort() // Function to sort linked list
{
    node *mov, *cur;
    cur = first;
    while (cur->next != NULL)
    {
        mov = cur->next;
        while (mov != NULL)
        {
            if (cur->data > mov->data)
            {
                int temp = mov->data;
                mov->data = cur->data;
                cur->data = temp;
            }
            mov = mov->next;
        }
        cur = cur->next;
    }
}

// stack using Array

class Stack
{
    int *arr;
    int top;
    int size;

public:
    Stack()
    {
        size = 10;
        arr = new int[10];
        top = -1;
    }
    Stack(int size)
    {
        this->size = size;
        arr = new int[size];
        top = -1;
    }

    bool isEmpty()
    {
        if (top == -1)
            return true;
        else
            return false;
    }

    bool isFull()
    {
        if (top == size - 1)
            return true;
        else
            return false;
    }

    void push(int a)
    {
        if (size - top >= 1) // stack is not full
        {
            top++;
            arr[top] = a;
        }
        else
        {
            cout << "\nStack Overflow \n\n";
        }
    }

    void pop()
    {
        if (top >= 0) // stack is not empty
        {
            top--;
        }
        else
        {
            cout << "\nStack Underflow\n\n";
        }
    }

    int peek()
    {
        if (top >= 0)
        {
            return arr[top];
        }
        else
        {
            cout << "\nStack is Empty\n\n";
            return -1;
        }
    }

    void displayStack()
    {
        if (isEmpty())
        {
            cout << "\nStack is empty !!\n";
        }

        else
        {
            cout << "Current Stack : \n";
            for (int i = 0; i <= top; i++)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }
};

// stack using linked list
class snode
{
public:
    int data;
    snode *next;
    snode(int n)
    {
        this->data = n;
        this->next = NULL;
    }
};

class ll_Stack
{
    snode *top;

public:
    ll_Stack() { top = NULL; }

    void push(int data)
    {

        snode *temp = new snode(data); // Create new node temp and allocate memory in heap

        if (!temp)
        {
            cout << "\nStack Overflow";
            return;
        }
        temp->data = data; // Initialize data into temp data field
        temp->next = top;  // Put top pointer reference into temp next

        top = temp; // Make temp as top of Stack
    }

    bool isEmpty() // Utility function to check if the stack is empty or not
    {
        return top == NULL;
    }

    int peek()
    {
        if (!isEmpty())
            return top->data;
        else
            return -1;
    }

    void pop() // Function to remove a key from given stack
    {
        snode *temp;

        if (top == NULL) // Check for stack underflow
        {
            cout << "\nStack Underflow" << endl;
            return;
        }
        else
        {

            temp = top; // Assign top to temp

            top = top->next; // Assign second node to top
            // This will automatically destroy the next between first node and second node
            // Release memory of top node i.e delete the node
            delete temp;
            this->display();
        }
    }

    // Function to print all elements of the stack
    void display()
    {
        snode *temp;

        // Check for stack underflow
        if (top == NULL)
        {
            cout << "\nStack Underflow";
            return;
        }
        else
        {
            temp = top;
            while (temp != NULL)
            {

                // Print node data
                cout << temp->data;

                // Assign temp next to temp
                temp = temp->next;
                if (temp != NULL)
                    cout << "  ";
            }
        }
    }
};

// queue using Array
class Queue
{
    int *array;
    int qfront;
    int rear;
    int size;

public:
    Queue()
    {
        size = 10;
        array = new int[size];
        qfront = -1;
        rear = -1;
    }

    bool isEmpty()
    {
        if (qfront == -1 && rear == -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    bool isFull()
    {
        return (rear == size - 1);
    }

    void enqueue(int a)
    {
        if (isFull())
            cout << "\nQueue is Full\n";

        else if (qfront == -1 && rear == -1)
        {
            qfront = rear = 0;
            array[rear] = a;
        }
        else
        {
            rear++;
            array[rear] = a;
        }
    }

    int dequeue()
    {
        if (isEmpty())
        {
            cout << "\nQueue is empty!!\n";
            return -1;
        }
        else if (qfront == rear)
        {
            int ans = array[qfront];
            qfront = rear = -1;
            return ans;
        }
        else
        {
            int ans = array[qfront];
            qfront++;
            return ans;
        }
    }

    int front()
    {
        if (qfront == rear)
        {
            // return -1;
            cout << "\nQueue is empty!!";
        }
        else
        {
            return array[qfront];
        }
    }

    void displayQ()
    {
        if (isEmpty())
            cout << "\nQueue is empty!!";
        else
        {
            cout << "\nCurrent Queue : ";
            for (int i = qfront; i <= rear; i++)
            {
                cout << array[i] << " ";
            }
            cout << "\n";
        }
    }
};

// queue using linkedlist
class qnode // creating a linked list;
{
public:
    int data;
    qnode *next;
};
class llQueue
{
    qnode *front;
    qnode *rear;

public:
    llQueue()
    {
        rear = NULL;
        front = NULL;
    }
    void displayQueue()
    {
        qnode *p;
        p = front;
        if (p == NULL)
        {
            cout << endl
                 << "Queue is empty" << endl;
        }
        while (p)
        {
            cout << p->data << " ";
            p = p->next;
        }
        cout << endl;
    }
    void enqueue(int data)
    {
        qnode *temp;
        temp = new qnode();
        temp->data = data;
        temp->next = NULL;

        if (front == NULL && rear == NULL)
        {
            front = temp;
            rear = temp;
        }
        else
        {
            rear->next = temp;
            rear = temp;
        }
    }
    void dequeue()
    {
        if (front == NULL)
        {
            cout << "\nQueue is empty";
        }
        else if (front == rear)
        {
            int x = front->data;
            qnode *t;
            t = front;
            front = front->next;
            rear = rear->next;
            delete t;
            cout << x << " is last element of queue and it's is deleted";
        }
        else
        {
            int x = front->data;
            qnode *t;
            t = front;
            front = front->next;
            delete t;
        }
    }
    bool isempty()
    {
        if (rear == NULL && front == NULL)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};

// Tree
class treeNode // class defining for tree node
{

public:
    int data;
    treeNode *left;
    treeNode *right;

    // constructor
    treeNode(int x)
    {
        this->data = x;
        this->left = NULL;
        this->right = NULL;
    }
};

void inOrderTreversal(treeNode *root) // in-order treversal
{

    if (root == NULL)
        return;

    inOrderTreversal(root->left);

    cout << root->data << " ";

    inOrderTreversal(root->right);
}

void preOrderTreversal(treeNode *root) // pre-order treversal
{

    if (root == NULL)
        return;

    cout << root->data << " ";

    preOrderTreversal(root->left);

    preOrderTreversal(root->right);
}

void postOrderTreversal(treeNode *root) // post-order treversal
{

    if (root == NULL)
        return;

    postOrderTreversal(root->left);

    postOrderTreversal(root->right);

    cout << root->data << " ";
}

void levelOrderTreversal(treeNode *root) // leverl-order treversal also known as BFS [Breadth-first search]
{

    queue<treeNode *> q;
    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        treeNode *temp = q.front();
        q.pop();

        if (temp == NULL)
        {
            cout << endl;
            if (!q.empty())
                q.push(NULL);
        }
        else
        {
            cout << temp->data << " ";

            if (temp->left)
            {
                q.push(temp->left);
            }

            if (temp->right)
            {
                q.push(temp->right);
            }
        }
    }
}

treeNode *buildTree(treeNode *root) // Binary tree build function
{

    cout << "\nEnter the node data : ";
    int data;
    cin >> data;
    if (data == -1)
        return NULL;
    root = new treeNode(data);

    cout << "\nEnter the data to insert at left of the node " << data << " \n";
    root->left = buildTree(root->left);

    cout << "\nEnter the data to insert at right of the node " << data << " \n";
    root->right = buildTree(root->right);

    return root;
}

treeNode *insertInBST(treeNode *root, int data) // iinsertion function for BST
{

    if (root == NULL)
    {
        root = new treeNode(data);
        return root;
    }

    if (data > root->data)
    {
        root->right = insertInBST(root->right, data);
    }
    else
    {
        root->left = insertInBST(root->left, data);
    }
    return root;
}

treeNode *minOfBST(treeNode *root) // function for minimum data node of BSt
{
    treeNode *temp = root;
    while (temp->left != NULL)
    {
        temp = temp->left;
    }
    return temp;
}
treeNode *maxOfBST(treeNode *root) // function for maximum data node of BSt
{
    treeNode *temp = root;
    while (temp->right != NULL)
    {
        temp = temp->right;
    }
    return temp;
}

bool searchInBST(treeNode *root, int data) // function for check the node presence in BST
{

    while (root != NULL)
    {
        if (root->data == data)
            return true;

        if (data > root->data)
            root = root->right;

        if (data < root->data)
            root = root->left;
    }
    return false;
}

treeNode *buildBST(treeNode *root) // function To build Binary search Tree
{
    cout << "\nEnter the data for nodes : ";
    int data;
    cin >> data;
    while (data != -1)
    {
        root = insertInBST(root, data);
        cin >> data;
    }

    return root;
}

treeNode *deleteInBst(treeNode *root, int data) // function to delete node in BST
{

    if (root == NULL)
    {
        cout << "\n Such data node is not present in BST!!";
        return NULL;
    }
    if (root->data == data)
    {

        // havin 0 child -
        if (root->left == NULL && root->right == NULL)
        {
            delete root;
            return NULL;
        }

        // having 1 child-
        // left child-
        if (root->right == NULL)
        {
            treeNode *temp = root->left;
            delete root;
            return temp;
        }
        // right child-
        if (root->left == NULL)
        {
            treeNode *temp = root->right;
            delete root;
            return temp;
        }

        // having 2 child -
        if (root->left && root->right)
        {

            int mini = minOfBST(root->right)->data;
            root->data = mini;
            root->right = deleteInBst(root->right, mini);
            return root;
        }
    }
    else if (data > root->data)
    {
        root->right = deleteInBst(root->right, data);
        return root;
    }
    else
    {
        root->left = deleteInBst(root->left, data);
        return root;
    }
    return root;
}

int main()
{
    cout << "                                  ******DATA STRUCTURES******  " << endl;
    int opt;
    do
    {

        cout << "\n1.Array " << endl;
        cout << "2.Linked List " << endl;
        cout << "3.Stack using Array " << endl;
        cout << "4.Stack using Linked List" << endl;
        cout << "5.Queue using Array" << endl;
        cout << "6.Queue using Linked List" << endl;
        cout << "7.Tree " << endl;
        cout << "8.End Program!!!!!" << endl;
        cout << "\nEnter option number : ";
        cin >> opt;
        switch (opt)
        {
        case 1: //              Array
        {

            int i, n, b = 10, c = 2, d; //*c=index number & b= number to input & d= use for number

            struct Array arr;
            cout << "\n\nEnter the size of array  : ";
            cin >> arr.size;
            arr.a = new int[arr.size];
            cout << "\nHow many  number do you want to store in the array : ";
            cin >> arr.length;
            if (arr.length > arr.size)
                cout << "\n!!!!!you cant enter the " << arr.length << "numbers in this array!!!!!";

            cout << "\nEnter the numbers : ";
            for (int i = 0; i < arr.length; i++)
            {
                cin >> arr.a[i];
            }
            display(arr);

            do
            {

                cout << "\n\n1.Add a number in Array\n";
                cout << "2.Insert a number in Array\n";
                cout << "3.Delete a number in array\n";
                cout << "4.Search a number in array\n";
                cout << "5.To get a number from array\n";
                cout << "6.To change a number in array\n";
                cout << "7.To sort an array \n";
                cout << "8.Exit to Main Menu\n";

                cout << "\n\n\nEnter the option number : ";
                cin >> n;
                switch (n)
                {
                case 1: //    1.Add a number in Array
                    cout << "Enter a number to add in array:\n";
                    cin >> b;
                    add(arr, b);
                    display(arr);
                    break;
                case 2: //     2.Insert a number in Array
                    cout << "To Insert a number in array\n";
                    cout << "Enter index number to insert in array : ";
                    cin >> c;
                    cout << "Enter the number to insert in array : ";
                    cin >> b;
                    insert(arr, c, b);
                    display(arr);
                    break;
                case 3: //    3.Delete a number in array
                    cout << "Enter a index number to delete a number : ";
                    cin >> c;
                    dlt(arr, c);
                    display(arr);
                    break;
                case 4: //    4.Search a number in array
                    cout << "1.Linear search\n2.Binary search\n";
                    cout << "Enter the option number: ";
                    cin >> d;
                    if (d > 2 && d < 0)
                        cout << "Enter correct option";
                    else
                        switch (d)
                        {
                        case 1: //  1.Linear search
                            cout << "Enter a number to search:";
                            cin >> b;
                            c = linear(arr, b);
                            if (c == -1)
                                cout << b << " is not found in array!!!!!!!!";
                            else
                                cout << b << " is found at index " << c << " in array!!!!!!!!\n";
                            break;
                        case 2: // 2.Binary search
                            cout << "Enter a number to search:";
                            cin >> b;
                            c = binary(arr, b);
                            if (c == -1)
                                cout << b << " is not found in array!!!!!!!!";
                            else
                                cout << b << " is found at index " << c << " in array!!!!!!!!\n";
                            break;
                        }
                    break;
                case 5: // "5.To get a number from array
                    cout << "Enter the index number :";
                    cin >> c;
                    b = get(arr, c);
                    if (b == -1)
                        cout << "Enter valid index number!!!! ";
                    else
                        cout << b << " is found at index " << c << "\n\n";
                    break;
                case 6: //  6.To change a number in array
                    cout << "Enter index number : ";
                    cin >> c;
                    cout << "Enter number : ";
                    cin >> b;
                    d = set(arr, c, b);
                    if (d == 1)
                        display(arr);
                    if (d == -1)
                        cout << "Enter valid index!!";
                    break;
                case 7: //  7.To sort an array
                    isSorted(arr);
                    display(arr);
                    break;
                case 8:
                    break;
                default:
                    cout << "Enter valid option!! ";
                    break;
                }

            } while (n != 8);
            break;
        }
        case 2: // Linked List
        {

            cout << "\nEnter the size of linked list : ";
            int sizeOfLL, optlist;
            cin >> sizeOfLL;
            int a[sizeOfLL];
            cout << "\nEnter linked list nodes data: ";
            for (int i = 0; i < sizeOfLL; i++)
            {
                cin >> a[i];
            }
            linkedlist l(a, sizeOfLL);
            l.display();

            do
            {

                cout << "\n\n1.Insert a number linked list\n";
                cout << "2.Delete a number in linked list\n";
                cout << "3.Search a number in linked list\n";
                cout << "4.Sort linked list\n";
                cout << "5.Display linked list\n";
                cout << "6.Exit to Main Menu\n";
                cout << "\n\n\nEnter the option number : ";
                cin >> optlist;
                switch (optlist)
                {
                case 1: //    Insert a number linked list
                {

                    int pos, data;
                    cout << "Enter position : " << endl;
                    cin >> pos;
                    if (pos <= 0 || pos > l.length() + 1)
                    {
                        cout << "\nInvalid position!!";
                    }
                    else
                    {
                        cout << "\nEnter the node data(only integer) : ";
                        cin >> data;
                        l.insert(pos, data);
                        l.display();
                    }
                    break;
                }
                case 2: //     Delete a number in linked list
                {

                    int n;
                    cout << "Enter number to Delete" << endl;
                    cin >> n;
                    if (l.search(n) == -1)
                    {
                        cout << "Enter valid number to Delete" << endl;
                        break;
                    }
                    else
                    {
                        l.Delete(n);
                    }
                    break;
                }

                case 3: //     Search a number in linked list
                {

                    int n;
                    cout << "Enter Number to Search :" << endl;
                    cin >> n;
                    int j = l.search(n);
                    if (j == -1)
                    {
                        cout << n << " is not found in linked list";
                        break;
                    }
                    else
                    {
                        cout << n << " is found at position " << j << " in linked list " << endl;
                    }
                    break;
                }
                case 4: //     Sort link list
                {

                    l.sort();
                    cout << "After sorting " << endl;
                    l.display();
                    break;
                }
                case 5: //   Display link list
                {

                    cout << " current link list ";
                    l.display();
                    break;
                }
                case 6:
                    break;
                default:
                    cout << "Enter valid option!! ";
                    break;
                }

            } while (optlist != 6);
            break;
        }
        case 3: // stack using Array
        {

            // initialization of stack;
            Stack st;
            int o;
            do
            {

                cout << "\n\n1.To push an element in the stack  \n";
                cout << "2.To pop an element from the stack \n";
                cout << "3.To get the top element of the stack\n";
                cout << "4.To check if the stack is empty or not \n";
                cout << "5.To display the stack\n";
                cout << "6.Exit to Main Menu\n";

                cout << "\n\nEnter the operation to be performed : ";
                cin >> o;

                switch (o)
                {
                case 1:
                    int num;
                    cout << "\nEnter the element to push : ";
                    cin >> num;
                    st.push(num);
                    st.displayStack();
                    break;

                case 2:
                    st.pop();
                    st.displayStack();
                    break;

                case 3:
                    cout << st.peek();
                    break;

                case 4:
                    if (st.isEmpty())
                    {
                        cout << "Stack is empty!!";
                        break;
                    }
                    else
                        cout << "Stack is not empty!!";
                    break;

                case 5:
                    st.displayStack();
                    break;
                case 6:
                    break;
                default:
                    cout << "Enter valid option!!";
                    break;
                }
            } while (o != 6);
            break;
        }
        case 4: // stack using Linked List
        {
            ll_Stack s;
            int opt;

            cout << "\nStack is initialised\n";
            do
            {
                cout << "\n\n1. To push element in stack." << endl;
                cout << "2. To pop element from stack." << endl;
                cout << "3. To display the stack." << endl;
                cout << "4. To check the stack is empty or not" << endl;
                cout << "5. To get the top element of stack" << endl;
                cout << "6. Exit to Main Menu\n";
                cout << "\n\n\nEnter the option number : ";
                cin >> opt;

                switch (opt)
                {
                case 1:
                    int num;
                    cout << "\nEnter the element to push :";
                    cin >> num;
                    s.push(num);
                    cout << "updated stack : ";
                    s.display();
                    break;

                case 2:
                    cout << "updated stack : ";
                    s.pop();
                    break;

                case 3:
                    cout << "updated stack : ";
                    s.display();
                    break;

                case 4:
                    if (!s.isEmpty())
                        cout << "\nstack is not empty!!" << endl;
                    else
                        cout << "\nstack is empty!!" << endl;
                    break;

                case 5:
                    if (s.isEmpty())
                        cout << "\nstack is empty therefore no top element is available." << endl;
                    else
                        cout << "\nTop element is : " << s.peek() << " in the stack";

                    break;
                case 6:
                    break;
                default:
                    cout << "Enter valid option!! ";
                    break;
                }

            } while (opt != 6);
            break;
        }
        case 5: // Queue using Array
        {

            // initialization of queue;
            Queue q;
            int o;
            do
            {
                cout << "\n\n1.To push an element in the queue  \n";
                cout << "2.To pop an element from the queue \n";
                cout << "3.To check if the queue is empty or not \n";
                cout << "4.To display the queue\n";
                cout << "5.Exit to Main Menu\n";
                cout << "\n\nEnter the operation to be performed : ";
                cin >> o;

                switch (o)
                {
                case 1:
                    int num;
                    cout << "\nEnter the element to push : ";
                    cin >> num;
                    q.enqueue(num);
                    q.displayQ();
                    break;

                case 2:
                    q.dequeue();
                    q.displayQ();
                    break;

                case 3:
                    if (q.isEmpty())
                    {
                        cout << "Queue is empty!!";
                        break;
                    }
                    else
                        cout << "Queue is not empty!!";
                    break;

                case 4:
                    q.displayQ();
                    break;

                case 5:
                    break;

                default:
                    cout << "Enter valid option!!";
                    break;
                }
            } while (o != 5);
            break;
        }
        case 6: // Queue using linked list
        {
            llQueue q;
            int o;
            do
            {
                cout << "\nChoose the operation to perform   \n";
                cout << "1.To push an element in the queue  \n";
                cout << "2.To pop an element from the queue \n";
                cout << "3.To check if the queue is empty or not \n";
                cout << "4.To display the queue\n";
                cout << "5.Exit to Main Menu\n";
                cout << "\n\nEnter the operation to be performed : ";
                cin >> o;

                switch (o)
                {
                case 1:
                {
                    cout << "\nEnter number to push in queue " << endl;
                    int num;
                    cin >> num;
                    q.enqueue(num);
                    cout << "\nCurrent Queue is: ";
                    q.displayQueue();
                    break;
                }
                case 2:
                    q.dequeue();
                    if (!q.isempty())
                    {
                        cout << "Current Queue : ";
                        q.displayQueue();
                    }
                    break;

                case 3:
                    if (q.isempty())
                    {
                        cout << "Queue is empty!!";
                        break;
                    }
                    else
                        cout << "Queue is not empty!!";
                    break;

                case 4:
                    q.displayQueue();
                    break;

                case 5:
                    break;

                default:
                    cout << "Enter valid option!!";
                    break;
                }

            } while (o != 5);
            break;
        }
        case 7: // Tree
        {
            int type;
            treeNode *root = NULL;

            do
            {

                cout << "\n\nSelect the options for TREE :- ";

                cout << "\n\n 1. Create Normal Binary tree (less functionality)";
                cout << "\n 2. Create Binary Search Tree(BST) (more functionality)";

                cout << "\n\n********All the next options only work if tree is created********" << endl;
                cout << "\n 3. Display tree using Level order treversing(BFS).";
                cout << "\n 4. Display tree using DFS In-order traversing.";
                cout << "\n 5. Display tree using DFS Pre-order traversing.";
                cout << "\n 6. Display tree using DFS Post-order traversing.";

                cout << "\n\n********All the next options are only useful for BST********" << endl;
                cout << "\n 7. Insert node in Binary Search Tree.";
                cout << "\n 8. Check the presence of node in Binary Search Tree.";
                cout << "\n 9. Delete node in Binary Search Tree.";
                cout << "\n 10. Get maximum and minimum data node from Binary search Tree.";
                cout << "\n 11. Exit to Main Menu\n";
                cout << "\nEnter option number: ";
                cin >> type;

                switch (type)
                {
                case 1:
                {
                    cout << "\nNote:-when reach at leaf nodes press -1\n";
                    root = buildTree(root);
                    cout << "\ncurrent tree is :-\n";
                    levelOrderTreversal(root);
                    break;
                }

                case 2:
                {
                    int temp;

                    cout << "\nNote:-when reach at leaf nodes press -1\n";
                    root = buildBST(root);

                    cout << "\ncurrent tree is :-\n";
                    levelOrderTreversal(root);
                    break;
                }

                case 3:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }
                    cout << "\n Displaying current tree using Level order treversing:-\n";
                    levelOrderTreversal(root);
                    break;
                }

                case 4:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }
                    cout << "\n Displaying current tree using in order treversing:-\n";
                    inOrderTreversal(root);
                    break;
                }

                case 5:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }
                    cout << "\n Displaying current tree using pre order treversing:-\n";
                    preOrderTreversal(root);
                    break;
                }

                case 6:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }
                    cout << "\n Displaying current tree using post order treversing:-\n";
                    postOrderTreversal(root);
                    break;
                }

                case 7:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }

                    int d;
                    cout << "\nEnter the data of node to be insert : ";
                    cin >> d;
                    root = insertInBST(root, d);

                    cout << "\nDisplaying current tree using level order treversing:-\n";
                    levelOrderTreversal(root);
                    break;
                }

                case 8:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }

                    int d;
                    cout << "\nEnter the data of node to be searched : ";
                    cin >> d;
                    if (searchInBST(root, d))
                    {
                        cout << "\nYes!!, Node with data " << d << " is present in BST.";
                        break;
                    }

                    cout << "\nNo!!, Node with data " << d << " is not present in BST.";
                    break;
                }

                case 9:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }

                    int d;
                    cout << "\nEnter the data of node to be deleted : ";
                    cin >> d;
                    root = deleteInBst(root, d);

                    cout << "\nDisplaying current tree using level order treversing:-\n";
                    levelOrderTreversal(root);
                    break;
                }

                case 10:
                {
                    if (root == NULL)
                    {
                        cout << "\n\nCreate A Tree before any other operations.!!";
                        break;
                    }

                    cout << "\nMaximum data node in BST is : " << (maxOfBST(root))->data << endl;
                    cout << "\nMinimum data node in BST is : " << (minOfBST(root))->data << endl;
                    break;
                }
                case 11:
                    break;
                default:
                    cout << "\n\nInvalid input!! Try Again.\n";
                    break;
                }

            } while (type != 11);
            break;
        }
        case 8:
            cout << "\n\n\n                                     ***Thank you!!!*** ";
            break;
        default:
            cout << "\n\nEnter valid option!!! " << endl;
            break;
        }
    } while (opt != 8);
    return 0;
}
