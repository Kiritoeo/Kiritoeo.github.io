---
title: Leetcode小记
icon: hugeicons:leetcode
breadcrumb: false
permalink: /leetcode/leetcodenotes.html  # 添加此行
date: 2025-02-19
category:
  -  数据结构和算法
# tag:
#   - 
---
## 数据结构
### 数组
#### 数组理论基础
- 在 Java 中数组是一个**对象**，它包含了一组**固定数量**的元素，并且这些**元素的类型是相同的**。
  - 数组在 Java 中本质上是一个对象，继承自 Object 类，可以通过如下三种方案去验证：
    - 可以通过 new 关键字创建
    ```java
    int[] arr = new int[3];
    ```
    - 可以调用 Object 类中的方法
    ```java
    arr.toString();
    arr.hashCode();
    ```
    - 可以使用 instanceof 验证
    ```java
    result = arr instanceof Object; //true
    ```
- 通过**索引**来访问数组的元素，在 Java 中索引是从 0 开始的。
- 数组中元素的类型可以是**基本数据类型**（比如说 `int`、`double`），也可以是**引用数据类型**（比如说 `String` 类），包括自定义类型。由于数组中的元素类型必须是相同的，因此 Java 中的数据类型有几种，数组的类型就有几种，数组的类型取决于数组中元素的数据类型：
  - byte、short、int、long、float、double
  - char
  - boolean
  - **数组**，例如高维数组，`int[][] matrix = new int[3][3]`;这里 matrix 数组的元素是 3 个一维的 int 型数组。
  - **接口**，这里需要注意，虽然数组可以被声名为接口类型，但是数组中的元素**不能是接口本身**，只能是**实现了该接口的实现类的实例对象**。
    ```java
    // 定义一个接口
    interface Animal {
        void speak();
    }

    // 实现接口的类
    class Dog implements Animal {
        public void speak() { System.out.println("Woof!"); }
    }

    class Cat implements Animal {
        public void speak() { System.out.println("Meow!"); }
    }

    public class Main {
        public static void main(String[] args) {
            // 声明接口类型的数组
            Animal[] animals = new Animal[2];
            animals[0] = new Dog();  // 存储 Dog 对象
            animals[1] = new Cat();  // 存储 Cat 对象

            // 调用接口方法
            for (Animal animal : animals) {
                animal.speak();  // 输出: Woof! Meow!
            }
        }
    }
    ```
  - **类**，例如包装器类、Stirng 类，自定义类。
- 还需要注意的一点是，如果数组储存的元素是引用数据类型例如：数组、类、接口，那么**实际上数组中储存的是引用**或者说是**对象的地址**，而不是对象本身。
  - **对象本身储存在堆区**
  - 对象的引用值储存在哪里，取决于引用的**作用域和定义位置**
    - **局部变量**的引用 → 栈区。
    - **成员变量**的引用 → 堆区（随对象本身存储）。
    - **静态变量**的引用 → 方法区（元空间）。
---
#### 数组的声明以及初始化
```java
//默认声明
int[] arr; //这一种常用一点
int arr[];
```
```java
//初始化
// 1
int[] arr = new int[3];
// 2
int[] arr = {1, 2, 3};
// 3
int[] arr = new int[]{1,2,3}

```
---
需要注意，数组的三种初始化方式有如下区别：

1. `int[] arr = new int[3];`
- 作用：创建一个长度为 3 的数组，元素初始化为默认值（int 类型为 0）。
- 特点：
  - 数组元素未显式赋值，需后续通过索引赋值。
  - 适用于**已知长度但元素值未知**的场景。
2. `int[] arr = {1, 2, 3};`
- 作用：在声明时直接初始化数组，长度由元素数量自动推断。
- 特点：
  - **仅限声明时使用，不可用于重新赋值**。
  - 代码简洁，适合已知初始值的场景。
    ```java
        int[] arr = {1, 2, 3};  // 合法
        arr = {4, 5, 6};     // 编译错误！
    ```
3.  `int[] arr = new int[]{1, 2, 3};`
- 作用：显式创建数组并初始化，长度由元素数量决定。
- 特点：
  - **可在任何地方使用（声明、重新赋值、方法传参等）**。
  - 语法更灵活，兼容性更强。



## 算法思想

### 二分法