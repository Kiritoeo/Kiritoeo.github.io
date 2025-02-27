---
title: Java 基础
breadcrumb: false
permalink: /java/javase.html  # 添加此行
# order: 1
category:
  - Java
tag:
  - JavaSE
date: 2025-02-14
---
## 1. Java 概述
### :heart_on_fire:什么是 Java
Java 是一门`面向对象的`、`跨平台的`高级编程语言，最早由 Sun 公司的詹姆斯·高斯林团队在 1995 年发行，其设计初衷是为了`简化 C++`并支持`跨平台`的特性。Java 继承吸收了 C++ 中的许多优点、也改进了其许多缺点。 

---
### :heart_on_fire:Java 的语言特性有哪些？
- `面向对象编程`，主要是封装、继承、多态
- `跨平台性`，“一次编译、到处运行”，因此采用 Java 语言编写的程序具有`很好的可移植性`。
- `支持多线程`，C++ 语言没有内置的多线程处理机制，所以需要调用系统的 API 来完成多线程程序设计，而 Java 提供了封装好的多线程支持。
- `支持 JIT`，也就是`即时编译器`。它可以在`程序运行时`将`字节码`转换成`热点机器码`来提高程序的运行速度。
---
### 什么是跨平台特性？原理是什么？
- 指 Java 语言编写的程序，一次编译后，可以在多个操作系统上运行。
- 原理是增加了一个中间件 JVM，JVM 负责将 Java 字节码转换为特定平台的机器码，并执行。
---
### 什么是字节码？采用字节码的好处是什么？
- 所谓的字节码，就是 Java 程序经过编译后产生的.class 文件。
- Java程序的运行包含着三个步骤：
	- 编译：JDK 中的 javac 程序将 Java 源代码`编译`成字节码文件（.class文件）
	- 解释：JVM 执行字节码文件，将字节码`解释`成操作系统能识别的机器码（二进制码）
	- 执行：操作系统`执行`机器码。
- 所以采用字节码可以便于不同的操作系统采用 JVM 来编译成其支持的机器码，就像是“预制菜”，商家发货给我们，我们只要用自己的锅就能做出和餐厅做的一样味道的菜。
---
### :heart_on_fire:JVM、JRE、JDK 分别是什么？有什么区别
- **JVM**：也就是 Java 虚拟机，是Java实现跨平台的关键所在，不同的操作系统有不同的 JVM 实现。JVM 负责将 Java 字节码转换为特定平台的机器码，并执行。
- **JRE**：也就是 Java 运行时环境，包含了运行 Java 程序所必需的库，以及 JVM。
- **JDK**：一套完整的 Java SDK，包括 JRE，编译器`javac`、Java 文档生成工具`javadoc`、Java 字节码工具`javap`等。为开发者提供了开发、编译、调试 Java 序的一整套环境。
- 简单来说，JDK 包含 JRE，JRE 包含 JVM。
---
### Java 继承了 C++ 哪些优点又改进了哪些缺点？

继承优点： 
- **面向对象**：继承了 C++ 的`面向对象特性`，如类、继承、多态等。
- **语法简洁**：借鉴了 C++ 的语法，但去除了复杂和冗余的部分，使语法更加简洁。
- **标准库**：提供了丰富的`标准库`，类似于 C++ 的`标准模板库（STL）`。

改进缺点：
- **手动内存管理**：引入`垃圾回收机制`自动管理内存，避免`手动管理内存的复杂性`和`潜在的内存泄漏`。
- **指针**：Java`取消了指针`，使用`引用`代替，避免指针操作中的常见错误，如`空指针`、`野指针`等。
- **多重继承**：Java`不支持多重继承`，而是通过`接口`实现类似的功能，避免多重继承带来的复杂性。
---
### 为什么说 Java是“编译与解释并存”的语言？
- `编译型语言`是指`编译器`针对特定的操作系统，将`源代码`一次性翻译成可被其执行的`机器码`。
- `解释型语言`是指`解释器`对源代码进行逐行解释，解释成`特定平台的机器码`并执行。
- 之所以有人说 Java 是“编译与解释并存”的语言，是因为 Java 程序需要`先将 Java 源代码文件编译`字节码文件，`再解释执行`。
---
## 2. Java 基础语法
### :heart_on_fire:Java 有哪些数据类型
首先要知道的是 Java 的数据类型可以分为基本数据类型和引用数据类型
- 基本数据类型
  - 字符型 **char** `2字节` 默认值 `\u0000`
  - 布尔型 **boolean** `1字节或者4字节` 默认值 `false`
  - 数值型
    - **byte** `1字节` 默认值 `0`
    - **short** `2字节` 默认值 `0`
    - **int** `4字节` 默认值 `0`
    - **Long** `8字节` 默认值 `0L`
    - **float** `4字节` 默认值 `0.0f`
    - **double** `8字节` 默认值 `0.0`
- 引用数据类型
  - 数组
  - 类
  - 接口
---
### :heart_on_fire:基本数据类型和引用数据类型有什么区别？为什么说数组、类、接口是引用数据类型？
- 基本数据类型直接存值，引用数据类型存堆地址；
- 数组、类、接口的实例均需动态内存分配，变量仅存储引用，因此属于引用类型。
---
### :heart_on_fire:引用类型的变量有什么特点？JVM引用类型有什么特点？
**引用类型的变量特点：**
- 引用类型的变量存储的是对象的引用，而不是对象本身，对象的引用具体来讲是对象在堆内存中的地址的值。对象的引用指向堆中的对象。
    ```java
    [栈帧]          
    │ Local Variables │
    ├─────────────────┤
    │  引用地址0x3F    │ ← 语言层面的变量
    └─────────────────┘
        │
        ▼
    ┌───────────────┐
    │ 堆内存对象     │
    │ (0x3F)        │
    │ instanceData  │
    └───────────────┘
        ▲
        │
    ┌───────────────┐
    │ 引用类型系统   │
    ├───────────────┤
    │ 强引用         │ ← 默认类型
    │ 软引用         │
    │ 弱引用         │
    │ 虚引用         │
    └───────────────┘
    ```
- 赋值时传递引用值的副本，多个变量可能指向同一对象，修改对象属性会同步影响所有引用。
    ```java
    Object obj1 = new Object();
    Object obj2 = obj1;  // 复制地址，非创建新对象
    // 多个变量可指向同一对象（产生副作用）
    ```
- 通过引用变量操作对象时，实际是间接操作**堆内存中的数据**。

**JVM引用类型的特点：**
- 这个问题关注在虚拟机层面，JVM引用类型有四种特点，强引用、软引用、弱引用和虚引用。

---
### :heart_on_fire:boolean 类型实际占用是多少字节？
- 这要依据具体的 JVM 实现细节，Java 虚拟机规范中，并没有明确规定 boolean 类型的大小。
- 仅指出 boolean 在编译后被当作 int（4 字节）处理，但在实际存储时，单个 boolean 可能占用 1 字节（例如作为类字段或局部变量）。
- 我本机的 64 位的 JDK 中，通过 JOL 工具查看单独的 boolean 类型，以及 boolean 数组，所占用的空间都是 1 字节。

Java 中使用 JOL（Java object layout）工具的方法：
1. 导入依赖
```xml
<dependency>
    <groupId>org.openjdk.jol</groupId>
    <artifactId>jol-core</artifactId>
    <version>0.17</version> <!-- 使用最新版本 -->
</dependency>
```
2. 打印对象布局
```java
import org.openjdk.jol.vm.VM;

public class JOLDemo {
    static class BooleanHolder {
        boolean flag; // 测试 boolean 字段
    }

    public static void main(String[] args) {
        // 打印 BooleanHolder 对象的内存布局
        System.out.println(VM.current().detailsOf(new BooleanHolder()));
    }
}
```
3. 输出示例
```java
# 对象头（Object Header）：12 字节（64位 JVM 开启压缩指针）
# 实例字段：boolean flag 占用 1 字节
# 对齐填充：3 字节（使对象总大小为 16 字节）
OFF  SZ      TYPE DESCRIPTION               VALUE
  0   8          (object header: mark)     0x0000000000000001 (non-biasable; age: 0)
  8   4          (object header: class)    0x00001234
 12   1   boolean BooleanHolder.flag       false
 13   3          (alignment/padding gap)   
Instance size: 16 bytes

```
---
### :heart_on_fire:给 Integer 的最大值+1，是什么结果？
- 当给 Integer.MAX_VALUE 加 1 时，会发⽣溢出，变成 Integer.MIN_VALUE。
```java
int maxValue = Integer.MAX_VALUE;
System.out.println("Integer.MAX_VALUE = " + maxValue); 
//Integer.MAX_VALUE = 2147483647
System.out.println("Integer.MAX_VALUE + 1 = " + (maxValue + 1)); 
//Integer.MAX_VALUE + 1 = -2147483648

// ⽤⼆进制来表示最⼤值和最⼩值
System.out.println("Integer.MAX_VALUE in binary: " + Integer.toBinaryString(maxValue));
//Integer.MAX_VALUE in binary: 1111111111111111111111111111111

System.out.println("Integer.MIN_VALUE in binary: " + Integer.toBinaryString(Integer.MIN_VALUE)); 
//Integer.MIN_VALUE in binary:10000000000000000000000000000000
```
---
### :heart_on_fire:什么是自动拆箱/装箱？
- 自动装箱：把`基本数据类型`转换为`包装器类型`
- 自动拆箱：把`包装器类型`转换为`基本数据类型`
```java
Integer a = 10;      // 自动装箱：int → Integer
int b = a;           // 自动拆箱：Integer → int
```
![基本数据类型和包装器类型](pics\wrapper.png)
[图片来源：沉默王二-面渣逆袭-JavaSE](https://javabetter.cn/sidebar/sanfene/javase.html)

---
### :heart_on_fire: float 如何表示小数？
在 Java 中，float 类型通过 `IEEE 754` `单精度浮点数标准` 表示小数，其核心原理是将小数分解为`符号位`、`指数位`、`尾数位`三部分，以`二进制形式`存储。
float 占用` 4 字节（32 位）`，按以下规则划分：
| 组成部分         | 位数   | 作用                                                                                      |
|------------------|--------|-----------------------------------------------------------------------------------------|
| 符号位 (Sign)    | 1 位   | 0 表示正数，1 表示负数                                                                   |
| 指数位 (Exponent)| 8 位   | 存储偏移后的指数值，实际指数值 = 指数位值 - 127（偏移量）                                |
| 尾数位 (Mantissa)| 23 位  | 存储小数部分的二进制有效数字，隐含前导的 "1."，实际存储的是小数点后的部分（隐藏位技术） |

具体表示步骤（以 -13.625 为例）
1. 符号位（Sign）
- 负数 → Sign = 1。
2. 转换为二进制科学计数法
- 整数部分：13 → 1101（二进制）。
- 小数部分：0.625 → 转换为二进制：
    ```java
    0.625×2=1.25(取整数部分 1)
    0.25×2=0.5(取整数部分 0)
    0.5×2=1.0(取整数部分 1)
    结果：0.101。
    ```
- 合并整数和小数部分：$13.625 = 1101.101_2 = 1.101101_2 \times 2^3 \quad (\text{规格化})$

3. 指数位（Exponent）
    ```java
    实际指数 = 3 → 存储值 = 3 + 127（偏移量） = 130。
    130 转换为 8 位二进制：10000010。
    ```
4. 尾数位（Mantissa）
    ```java
    规格化后的尾数为 101101（去掉前导 “1.”）。
    补零到 23 位：
    10110100000000000000000。
    ```
5. 完整表示
   ```java
   完整 32 位二进制：1 10000010 10110100000000000000000
   ```
   ```java
    public class FloatExample {
    public static void main(String[] args) {
        float num = -13.625f;
        int bits = Float.floatToIntBits(num);
        String binary = Integer.toBinaryString(bits);
        // 补齐前导零到32位
        binary = String.format("%32s", binary).replace(' ', '0');
        System.out.println("二进制表示: " + binary);
       }
    }

   ```
   ```java
   二进制表示: 11000001010110100000000000000000
   ```
---
关于 Java 中 float 型数据的存储，还需要注意以下几个小细节：
- **指数位**：`IEEE 754`标准中，指数位是8 bits，按理来说应该可以表示`0-255`，但是全零和全一的情况被单独拎出，所以范围是`1-254`，由于`实际指数值` =`指数位值` - `127` （偏移量），因此实际上可以表示指数的范围是`-126-127`。
- **尾数位**：尾数位为什么可以去掉前导 “1.”？
  - 核心原因：通过`规格化隐含前导 “1.”`，`节省存储空间`并`提高精度`。
  - 由于规格化数的二进制科学计数法，`首位始终是 1`（除非是 0 或非规格化数），因此，无需显式存储这个 “1”，直接存储小数点后的部分即可。
- **数据精度丢失问题**：例如，十进制 0.1 的二进制是无限循环的 0.0001100110011...，导致存储时被截断或舍入。尾数只有 23 位，超出部分会被丢弃。
- **高精度场景使用 BigDecimal 类**：
    ```java
    BigDecimal d1 = new BigDecimal("0.1");
    BigDecimal d2 = new BigDecimal("0.2");
    System.out.println(d1.add(d2));  // 0.3（精确结果）
    ```
---
### :heart_on_fire:讲⼀下数据准确性⾼是怎么保证的？
金融计算中一般有两种方式保证数据的准确性：
- 使用大数类 `BigDecimal`
- 将 float 型转换为 int 型计算
    ```java
    //处理小额支付的时候，可以使用较小的货币单元，例如19.9元可以转换成199分，这样不仅提高了运算速度，还保证了计算的准确定性。
    int priceInCents = 199;
    int number = 10;
    int totalInCents = number * priceInCents;
    System.out.println("Total price in cents: " + totalInCents);
    ```

## 3. 面向对象
### :heart_on_fire:什么是面向对象？什么是面向过程？有哪些区别？
- 面向对象编程是一种`编程范式`，或者说是一种`编程思想`。
- 它通过将`现实世界中的事物`抽象为`对象`来组织代码，将`数据`和`操作数据的方法`捆绑在一起，形成一个独立的实体。
- 面向对象的三大特性：`封装、继承、多态`。
---
- 面向过程编程是一种以`过程（函数）`为中心的编程范式，通过定义一系列`可调用的步骤（函数）`来解决问题。其核心思想是`将程序分解为多个线性执行的步骤`，强调`算法的实现顺序`和`数据与操作的分离`。
---
两者的区别在于：
- 面向对象以`对象`为核心，强调`将数据和操作数据的方法`视作一个独立的实体，可以更好的`模拟现实世界里对象的交互。`
- 而面向过程更强调以`过程`为核心，更关注`完成一个特定的任务`包含的`具体步骤。`
- 面向对象编程它的代码`可维护性更好`，可以通过`继承、组合、多态`等方式进行复用。
---
**面向对象编程在具体项目中的体现**：
在目前正在做的`码力工坊`的项目中：
- 通过`私有属性`和`公有方法`封装对象实体，就体系了面向对象的`封装`特性。
 ```java
@Entity
@Data // Lombok自动生成getter/setter（封装）
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;          // 私有属性
    
    @Column(nullable = false)
    private String username;  // 外部必须通过方法访问数据
    
    @Column(updatable = false)
    private LocalDateTime createTime;
}

// DTO封装接口传参细节
public class UserDTO {
    @NotBlank(message = "用户名不能为空")
    private String username;
    
    // 仅暴露必要字段，隐藏User实体敏感信息（如密码）
    public User toEntity() {
        User user = new User();
        user.setUsername(this.username);
        return user;
    }
}
```
- 通过继承某个类，复用其中的 CRUD 基础操作，就体现了`继承`的特性
```java
// 子接口继承父接口的所有方法
public interface UserRepository extends JpaRepository<User, Long> {
    // 自定义查询方法（继承基础上扩展）
    User findByUsername(String username);
}

// Service层直接调用继承的方法
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    
    public User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(); // 继承自JpaRepository
    }
}
```
- 在 Service 层，接口与实现类是分离的，通过接口注入不同实现类可以实现策略切换，这就体现了`多态`的特性。比方说支付业务，调用方只需关注接口，无需关心具体实现，新增支付方式无需修改调用逻辑。
```java
// 接口定义规范
public interface PaymentService {
    void pay(BigDecimal amount);
}

// 支付宝实现（多态分支1）
@Service("alipay")
public class AlipayService implements PaymentService {
    @Override
    public void pay(BigDecimal amount) {
        System.out.println("支付宝支付：" + amount);
    }
}

// 微信支付实现（多态分支2）
@Service("wechatPay")
public class WechatPayService implements PaymentService {
    @Override
    public void pay(BigDecimal amount) {
        System.out.println("微信支付：" + amount);
    }
}

// Controller根据条件动态调用
@RestController
public class OrderController {
    @Autowired
    private Map<String, PaymentService> paymentServices; // 注入所有实现类

    @PostMapping("/pay")
    public void pay(@RequestParam String type, @RequestParam BigDecimal amount) {
        PaymentService service = paymentServices.get(type);
        service.pay(amount); // 多态调用（实际执行哪个实现类的方法由type决定）
    }
}
```
### :heart_on_fire:什么是封装、继承、多态？
- 封装指的是将`数据`和`操作数据的方法`捆绑在一起，形成一个`独立的对象`，或者说将`字段（成员变量）`和`方法`捆绑在一起，形成一个`类的实例`。
- 例如一个 House 类，它的成员变量可能有桌子`table`和房间`room`，电视`television`等等，方法可能有供电`electricProvide()`，供暖`warmthProvide()`，开门`doorOpen()`等等。
- 很好理解，我们肯定不希望家里面的东西被一览无余，因此会用`Private`关键字去修饰字段，但是我们肯定也不希望房子与外面与世隔绝，因此需要有一些将外部和房子内部连接起来的方法例如`doorOpen()`。
- 因此`封装`简单来讲就是`把一个对象的属性私有化`，同时`提供一些可以被外部访问的方法`。
```java
public class House {
	private String roomType = "ins风大主卧";
	private String televisionType = "50寸液晶电视";
	public void doorOpen(){
		System.out.println("我进来看你的房子啦");
		System.out.println(televisionType);
	}
}
```
---
- 继承指的是一个`类（或者说子类）`可以继承`现有类（或者说父类）`的现有`属性和方法`，以提高代码的复用性，建立类之间的层次关系。
- 例如Student继承Person类
```java
public class Person{
	private String name;
	private String age;
	public void living(){
		System.out.println("活着")
	}
}

public class Student extends Person{
	private String university;
	public void study(){
		System.out.println("学习")
	}
}
```
---
- 多态指同一个`方法`调用可根据`对象类型`的不同表现出不同的行为。其本质是通过`统一的接口`操作`不同的对象`，实现“一个接口，多种实现”。
- 实现多态的三个前提
	- 存在`继承关系`或`接口实现`，`父子类继承`或`类实现接口`是基础条件。
	- 子类`重写（Override）`父类方法
	- 父类引用指向子类对象`（向上转型）`（这个不是多态实现的必须条件）
- Q：实际项目开发中，业务的实现看起来并没有满足条件 3，为什么理解为实现了多态？例如
```java
// 接口定义规范
public interface PaymentService {
    void pay(BigDecimal amount);
}

// 支付宝实现（多态分支1）
@Service("alipay")
public class AlipayService implements PaymentService {
    @Override
    public void pay(BigDecimal amount) {
        System.out.println("支付宝支付：" + amount);
    }
}

// 微信支付实现（多态分支2）
@Service("wechatPay")
public class WechatPayService implements PaymentService {
    @Override
    public void pay(BigDecimal amount) {
        System.out.println("微信支付：" + amount);
    }
}

// Controller根据条件动态调用
@RestController
public class OrderController {
    @Autowired
    private Map<String, PaymentService> paymentServices; // 注入所有实现类

    @PostMapping("/pay")
    public void pay(@RequestParam String type, @RequestParam BigDecimal amount) {
        PaymentService service = paymentServices.get(type);
        service.pay(amount); // 多态调用（实际执行哪个实现类的方法由type决定）
    }
}
```
- A: 虽然接口实现并没有父子类的关系，但是实际上仍然体现了“一个`方法`调用可根据`对象类型`的不同表现出不同的行为”的核心思想。
	- **Map的值类型**：`paymentServices`中存储的 value 实际上是`AlipayService`或`WechatPayService`的实例，但被声明为`PaymentService`类型。
	- **变量`service`的类型**：虽然声明为接口类型`PaymentService`，但实际指向的是子类对象。

### :heart_on_fire:为什么 Java ⾥⾯要多组合少继承？
- 继承适合描述`is-a`的关系，但继承容易导致类之间的`强耦合`，`父类的修改可能会破坏子类`，违反了开闭原则
- 组合适合描述`has-a`和`can-do`的关系，通过在`类中组合其他类`，能够`灵活的扩展功能`。组合避免的复杂的类继承体系，同时`遵守了开闭原则`
---
### :heart_on_fire:什么开闭原则？Java 面向对象设计的设计原则有哪些？
开闭原则（Open close Principle, OCP）是面向对象的核心设计原则，`SOLID五大原则`的其中之一，具体说的是`尽量通过抽象和接口实现功能的扩展`，避免修改已有的代码。
核心设计原则：SOLID 五大原则
- `单一职责原则（Single Responsibility Principle, SRP）`
  - 很好理解，一个类只负责一项职责。
- `开闭原则（Open-Closed Principle, OCP）`
  - 功能的扩展尽量通过抽象和接口去实现，避免修改原有的代码。
- `里氏替换原则（Liskov Substitution Principle, LSP）`
  - 子类必须能够替换父类，且不破坏程序的正确性。（父类可以出现的地方，子类也一定可以出现。）
- `接口隔离原则（Interface Segregation Principle, ISP）`
  - 避免胖接口，减少接口中的冗余方法。接口应该仅包含业务所需要的方法，而不是强制客户端实现不相干的方法。
```java
// 违反 ISP 的"胖接口"
interface Worker {
    void work();   // 工作
    void eat();    // 吃饭
    void repair(); // 维修
}

// 人类员工需要实现所有方法，但"维修"不是人类的需要
class HumanWorker implements Worker {
    public void work() { /* 工作 */ }
    public void eat() { /* 吃饭 */ }
    public void repair() { 
        throw new UnsupportedOperationException("人类不需要维修！"); 
    }
}

// 机器人需要实现所有方法，但"吃饭"对机器人无意义
class RobotWorker implements Worker {
    public void work() { /* 工作 */ }
    public void eat() { 
        throw new UnsupportedOperationException("机器人不需要吃饭！"); 
    }
    public void repair() { /* 自我维修 */ }
}

```
- `依赖倒置原则（Dependency Inversion Principle, DIP）`
  - 高层模块不应依赖低层模块，两者都应依赖抽象。
  - 抽象不应依赖细节实现，细节实现应依赖抽象。

其他的关键设计原则还有：
- `组合/聚合复用原则（Composite/Aggregate Reuse Principle, CARP）`
  - 优先使用组合关系而非继承关系来复用代码，减少继承关系带来的紧耦合问题。
- `迪米特法则（Law of Demeter, LoD） / 最少知识原则`
  - 一个对象应尽可能少地了解其他对象的结构，这也是为了降低类之间的耦合程度，提高模块化的性质。
---

### :heart_on_fire:什么是⾥⽒代换原则？
- 里氏代换原则是面向对象的核心五大原则，SOLID原则的其中一个原则，LSP原则，也叫里氏代换原则，指的`父类出现的地方，子类也一定可以出现`，或者说`子类必须能够替换父类，且不破坏程序的正确性`。
---
### :heart_on_fire:什么是组合/聚合复用原则？
- `组合/聚合复用原则，或者说是 CARP`，也是面向对象的关键原则之一，指的是`优先使用组合关系而非继承关系`来复用代码，减少继承关系带来的紧耦合问题。
---
### :heart_on_fire:Java 支持多继承吗？接口可以多继承吗？
- Java中类`不支持多继承`，`一个类一次只能继承一个类`，而不能继承多个类，多继承会引发`菱形问题`。
  - 菱形问题可以简单举个例子，假设类B和类C都继承同一个父类A并都重写父类的一个方法，这个时候如果类D同时继承B、C并调用这个方法，会发生二义性问题，因为程序不知道是要调用哪一个父类的方法。
- 但是 Java 中的`接口可以多继承`
  - 假设有两个接口 A、B，C 同时继承了接口 A、B并定义了自己的方法，那么实现类实现接口 C 的时候，只需要把接口 ABC 三者中的抽象方法全部实现即可。
---
### :heart_on_fire:继承和抽象的区别？
- 继承是面向对象的特定或者说是一种机制，其允许子类获取父类的属性和方法，`核心目的是代码复用以及建立类之间的层次关系`。
- 而抽象是一种技术，其定义了`一种规范或者说行为模板`。抽象技术具体有两种实现方式：
  - `通过抽象类实现`
    - 抽象类中至少会定义一个抽象方法，子类继承抽象类的时候必须要实现其中所有的抽象方法。
  - `通过接口实现`
    - 接口中定义的方法也是抽象方法，在 Java 8之前，接口中只有抽象方法，但是在 Java 8的时候，引入了 default 方法，即默认实现的具体方法，实现接口的时候，所有的抽象方法需要被实现类实现。
---
### :heart_on_fire:抽象类和普通类的区别？
- 首先是`实例化区别`：抽象类不能被实例化，只能通过子类继承后实现所有抽象方法。
- 其次是`类内部的方法`：普通类中声名的方法必须要有具体实现，而抽象类中可以用抽象方法，也可以有非抽象方法。
---
### :heart_on_fire:抽象类能定义构造方法吗？
首先需要明确，`普通类和抽象类都可以定义构造方法`，因为构造方法是`对象初始化的核心机制`，并且每个类中都会含有构造方法，当然，可以显示定义构造方法，也可以不定义，由编译器隐式生成一个无参的构造方法。
- 其次，需要知道抽象类虽然可以定义构造方法，但是由于它不能实例化，因此不能像普通类那样直接 new 来初始化，只能在子类的构造方法中使用`super关键字`间接调用父类的构造方法。
```java
abstract class Animal {  
    private String species;  
    // 抽象类的构造方法  
    public Animal(String species) {  
        this.species = species;  
    }  
}  

class Dog extends Animal {  
    public Dog(String species) {  
        super(species); // 调用抽象类的构造方法  
    }  
}  

```
### :heart_on_fire:抽象类和接口的区别？
- 一个类只能继承一个抽象类；但一个类可以实现多个接口。所以我们在新建线程类的时候一般推荐使用`实现Runnable 接口`的方式，这样`线程类还可以继承其他类`，而不单单是 Thread 类。

- 抽象类符合`is-a`的关系，而接口更像是`has-a`的关系，抽象类在实现多态的时候是`纵向延申`的，子类继承父类中已实现的方法或者实现抽象方法从而实现扩展；而`接口是横向扩展`的，`不同的实现类实现同一个接口`从而实现业务逻辑的扩展。
- `抽象类中可以定义构造方法`，但是`接口中不能定义构造方法`。因为接口中没有实例变量需要初始化，因此不需要构造方法，接口的`核心职责`是`声明对象能做什么（行为）`，而`不是定义对象是什么（类型）`或`如何初始化（状态）`。
- 关于成员变量，接口中的成员变量只能包含`public static final`常量，本质是全局配置参数，因为`接口的核心目的`是`定义行为规范（can-do 能力）`，而非维护对象状态。

---
### :heart_on_fire:多态解决了什么问题？
- 总的来说，多态可以`消除冗杂的代码`，`降低模块的耦合度`以及`提升程序的可扩展性`和`可维护性`。
- 多态使用同一接口或者父类引用调用不同子类对象的具体方法实现不同的业务逻辑。

例如，如果我有一个`父类Animal`，其中有一个`makeSound`方法，表示动物发出声音的行为，同时我有一个`子类Cat`和`子类Dog`。如果不采用多态的话，我需要用`if-else`分别去判断Animal的实例对象具体属于哪一个动物类，再分别去写对应的实现逻辑。
如果采用多态的话就简单了，可以让子类分别继承`Animal`再`重写makeSound`方法，最后通过`Animal的引用`指向`子类的具体实例`，程序在`运行时`会根据对象的类型`动态绑定`，找到对应对象的具体方法去执行。
```java
// 需要为每种动物编写单独的处理逻辑
public void makeSound(Animal animal) {
    if (animal instanceof Dog) {
        ((Dog) animal).bark();
    } else if (animal instanceof Cat) {
        ((Cat) animal).meow();
    } else if (animal instanceof Bird) {
        ((Bird) animal).chirp();
    }
    // 每新增一种动物，就要修改此处代码！
}

```
```java
// 所有动物继承自 Animal 基类，并重写 makeSound 方法
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks: Woof!");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows: Meow!");
    }
}

// 调用方只需统一调用 makeSound()
public void playSound(Animal animal) {
    animal.makeSound(); // 多态：实际调用哪个方法由运行时对象类型决定
}
```
---
### :heart_on_fire:多态的实现原理是什么？
多态通过`动态绑定`实现，其核心机制依赖于`虚方法表（vtable）`。
- 动态绑定指的是`JVM会在运行时，根据对象实际类型调用正确的方法`。
- 关于虚方法表
  - 每个`类在加载的时候都会生成虚方法表`，存储该类所有虚方法的`入口地址`
  - 子类继承父类的虚方法表，覆盖的方法会替换为子类实现的地址，新增方法追加到表末尾。
  - 方法调用时，JVM根据对象实际类型定位其类的虚方法表，通过固定索引查找方法地址，直接跳转执行。

所以简单来说，Java 使⽤`虚⽅法表`存储`⽅法指针`，⽅法调⽤时根据`对象实际类型`从虚⽅法表查找具体实现。
![多态实现原理](pics\vtable.png)

---
### :heart_on_fire:重载和重写是什么，有什么区别？
- 方法重载（Overload）用于提供`不同参数的方法`处理不同情况，通常是在`同一个类`中定义`入口参数不同`但是`方法名称和功能相同`的若干个方法。重载提供`同一操作的不同实现方式`，实现了`参数多样化`。（如` add(int, int) `和 `add(double, double)`）。
- 方法重写（Override）通常出现在多态中，一般是在`某个父类的子类`中或者`某个接口的实现类`中。重写要求`方法的名称`和`参数列表`完全相同、`返回类型相同或者为父类返回类型的子类`。

另外，重写和重载还有一些区别：
- 访问权限上：子类重写父类的方法，访问权限`不能比父类更严格`，重载无限制。
- 异常处理上：子类`不能抛出比父类更高级或者说宽泛`的异常。重载无限制。
- 静态方法：`不能重写静态方法`，但`可以重载静态方法`。
- 绑定机制：重写是在`运行时动态绑定`，而重载是在`编译时根据参数类型调用`。
---
### :heart_on_fire:static 关键字修饰的对象以及作用？
- 首先来说，static 关键字可以用来修饰`变量`、`方法`、`代码块`和`内部类`。
- 被 static 关键字修饰的变量和方法叫称为`静态变量和静态方法`，或者叫类变量、类方法，在`层级上属于类`，而`不属于类的任何一个变量`，可以通过类名直接访问被 static 修饰的变量和方法。
- 被 static 修饰的变量，只在`类加载时`获取一次内存，存放在`堆区`，因此静态变量很节省内存空间。
- 被 static 包裹起来的代码段称为`静态代码块`，在类加载的时候，静态代码块中的内容在 main 方法调用之前就会执行，在实际的项目开发中常用来`加载配置文件`到内存中。
- 被 static 修饰的内部类称为静态内部类，静态内部类`与外部类相关`但`独立于外部类实例`。
  静态内部类`不需要依赖外部类的实例对象`即可直接创建。这意味着无需实例化外部类，即可直接通过 `外部类名.内部类名` 访问静态内部类。
  这种特性使其适用于`工具类或辅助类`的封装，与`外部类逻辑相关但功能独立`。

总的来说，static 关键字`方便在没有创建对象的情况下`对`变量或者方法`进行调用，也就是说可以通过类名直接调用静态类的成员变量和成员方法。

---
### :heart_on_fire:final 关键字的作用？
首先 final 关键字可用来修饰类、变量以及方法。
`
- **修饰类的时候**，表示这个类`不能再被继承`，例如String类、Integer类以及其他的包装器类，它们都是被 final 修饰的。
- **修饰变量的时候**，表示这个`变量的值一旦被初始化就不能被修改`。
  - 变量是基本数据类型的时候，`数值不变`。
  - 变量是引用数据类型的时候，`引用不变`。即一旦初始化之后，引用不能再指向另一个对象，但是引用指向的对象内容可以改变。
    ```java
    final StringBuilder sb =  new StringBuilder("wangchen");
    sb.append("tekapo");
    System.out.println(sb); //wangchentekapo

    sb = new StringBuilder("1026"); //编译错误
    ```
-  **修饰方法的时候**，表示这个方法不能被重写。也即是说当一个类继承了某个类，重写那个类中被 final 修饰的方法是不被允许的。
---
### :heart_on_fire:final，finally、finalize 有什么区别？
- final 是修饰符，可以用来修饰`类、变量或者方法`。当修饰类时，表示这个类不能被继承，修饰方法时，表示这个方法不能被重写，修饰变量的时候，表示这个变量的值不能被改变，如果是基本数据类型的变量则是数值不能被改变，如果是引用数据类型的变量，则是引用不能被改变，但是引用指向的对象内容可以改变。
- finally 是 `Java 异常处理`中的一部分，用来创建 try 块后的 finally 块。无论 try 块中是否捕获异常，finally 块中的代码总是会执行。finally 块常用来`释放资源`，例如`关闭文件或者数据库连接`。
- finalize 是 `Object` 类中的一个方法，用于`在垃圾回收器将对象从内存中清理出去之前`做一些必要的清理工作。
  - finalize 方法在`垃圾回收器准备释放对象占用的内存之前`被自动调用。我们通常不能显式的调用这个方法，通常是由垃圾回收器在合适的时间自动调用。
---
### :heart_on_fire:== 和 equals() 方法的区别？
`==` 和 `equals()` 方法用来比较两个对象。
- `==` 是用来比较`两个对象的引用`是否相等，即它们`是否指向同一个对象实例`。
  - 如果是基本数据类型，则 `==` 比较的是`数值是否相等`。

- `equals()` 方法是用来比较`两个对象的内容`是否相等
  - 默认情况下，这个方法的方法体或者说行为是和 == 相同的，即比较两个对象的引用。例如超类 `Object` 中
    ```java
    public boolean equals(Object obj) {
        return (this == obj);
    }
    ```
  - 但是这个方法经常被各种类重写。例如 String 类重写 `equals()` 方法，以便它可以比较两个字符串的具体内容是否一样。

---
### :heart_on_fire:为什么重写 equals() 方法后必须要重写 hashCode() 方法？
- 主要是为了遵守 Java 对象一致性的约定，确保依赖哈希码的集合类如 HashMap、HashSet 能够正常工作。
- 假如重写了 equals() 方法之后没有重写 HashCode() 方法，那么被 equals() 方法认为相同的两个对象可能会有不同的哈希码。因为在超类 Object 类中的 HashCode() 方法的默认实现中，不同的对象的默认哈希码大概率是不一样的。

举个简单的例子：
```java
public class Person{
    int age;
    String name;
    //重写了 equals 方法
    @Override
    public boolean equals(Object o){
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    //没有重写HashCode()方法
}

public static void main(String[] args) {
    Person p1 = new Person("Alice", 25);
    Person p2 = new Person("Alice", 25);

    System.out.println(p1.equals(p2));  // true（equals 正确）
    System.out.println(p1.hashCode() == p2.hashCode());  // false（违反约定！）

    //后果
    HashSet<Person> set = new HashSet<>();
    set.add(p1);
    set.contains(p2);  // 返回 false，尽管 p1.equals(p2) 为 true
}
```
>照理来说，`set.contains(p2)` 应该返回 `true`，因为 `p1` 和 `p2` 通过重写后的 `equals()` 方法是相等的，但是由于没有重写 `HashCode()` 方法，所以这两个实例的哈希码是不一样的，而 HashSet 又是通过 哈希码定位桶，由于这两个实例的哈希码不一样，因此 `set.contains(p2)` 应该返回 `false`。

---
### :heart_on_fire: 什么是 hashCode() 方法？
`hashCode()` 方法是一个定义在 `Object` 类中的`本地方法`，用于`返回对象的哈希码`。
```java
    public native int hashCode();
```
---
### :heart_on_fire: 为什么要有 hashCode() 方法？
`hashCode` ⽅法主要⽤来获取对象的哈希码，哈希码是由对象的`内存地址或者对象的属性`计算出来的，它是⼀个
int 类型的整数，通常不会重复，因此可以⽤来作为键值对的建，以提⾼查询效率。

---
### :heart_on_fire: 为什么两个对象的 hashCode 值相等，它们也不一定相同？
1. 首先需要说明的是，两个`拥有相同哈希码的对象不一定相等`，这是由哈希码的`本质和设计目的`所决定的。
   - 这种现象被称为`哈希冲突`，哈希冲突的是必然的，从数学上看，`hashCode()` 的输出是 `int` 型，32 位大概约有 42.9 亿种可能。但是对象的可能性是无限的，因此定义域相当于是无限大，而值域却是有限的，必然存在不同的输入拥有相同的输出，因此必然存在不同的对象拥有相同的哈希码。
2. 在 Java 设计规范下，`哈希码相等`是`对象相等`的`必要不充分条件`，也就是说：
   - 如果两个对象是相同的，那么他们的哈希码一定是相等的
   - 但是如果个对象的哈希码是相等的，这两个对象不一定相同
   - 为了解决哈希冲突，哈希表在处理键的时候，不仅会比较键对象的哈希码，还会使用equals方法来检查键对象是否真正相等。
---
### :heart_on_fire: hashCode() 方法和 equals() 方法的关系？
- `hashCode()` 方法用来获取一个对象的哈希码， `equals()` 方法用来比较两个对象是否完全相同
- 如果通过 `equals()` 方法比较为 `true` 的两个对象，那么这两个对象的哈希码一定是相等的。
- 当然，如果通过 `equals()` 方法比较为 `false` 的两个对象，他们的哈希码可能不同也可能相同。
---
### :heart_on_fire:Java 是值传递还是引用传递？
Java 是值传递，当一个对象被作为参数传递到方法中的时候，参数实际上就是对象的引用值，引用值就是对象在堆中的地址。因此传递对象的时候，实际上是传递对象在堆内存中的地址，而不是对象本身。
![对象的引用指向堆内存](pics\ref.png)

---
### :red_circle:Java 讲一讲 Java 中的浅拷贝和深拷贝
- 浅拷贝和深拷贝是拷贝对象的两种完全不同的方式。
- 两种拷贝方式的本质区别：
  - 浅拷贝复制对象时，仅复制基本数据类型字段的值和引用数据类型的引用地址，不复制引用指向的实际对象。新对象与原对象的引用字段指向同一内存地址，修改其中一个对象的引用字段会影响另一个。
  - 深拷贝复制对象时，会递归的复制所有的引用对象，确保新对象和原对象完全独立，新旧对象的任何改变都不会对彼此产生影响。
- 两种拷贝方式的实现：
  - 浅拷贝通过实现 Cloneable 接口并重写 clone() 方法。
  - 深拷贝的实现方式有两种。
    - 一种是手动递归复制所有的引用对象，重写 clone() 方法时，对每个引用字段调用其 clone() 
    - 第二种可以使用序列化和反序列化的方法。序列化和反序列化指的是将对象写入字节流再读回，要求所有相关类实现 Serializable 接口。
---
### :heart_on_fire:Java 创建对象有哪几种方式
Java 创建对象主要有四种方式：
- 直接通过 new 关键字，调用类的构造方法直接创建
- 通过反射机制创建，通过 Class 类或者 Constructor 类的 newInstance() 方法。
- 通过 clone 机制创建，需要实现 Cloneable 接口并重写 clone() 方法，默认是浅拷贝。
- 通过序列化和反序列化创建，从字节流重建对象，绕过构造方法。
---
### :heart_on_fire:new 子类的时候，子类和父类的静态代码块，构造方法的执行顺序
1. 执行父类静态代码块
2. 执行子类静态代码块
3. 执行父类构造方法
4. 执行子类构造方法

因此可以总结，静态代码块总是先执行的，其次静态代码块和构造方法均按照父类-子类的顺序执行，另外要注意的是，静态代码块尽在类第一次加载的时候执行。

---
## 4. String 类
### String 是 Java 的基本数据类型吗？可以被继承吗？有哪些常用的方法？
- String 是一个类，属于引用数据类型，并且 String 被 final 所修饰，是不可变类，不能被继承。
- String 类中有很多操作字符串的方法，我自己比较常用的有几种：
  - length() - 获取字符串的长度（**需要与数组中的 length 变量做区分，编码的时候经常出问题**）
  - **indexOf**(int char / String str) - 返回指定字符或字符串的**首次出现位置**
  - **charAt**(int index) - 返回指定下标的字符
  - **substring**(int beginIdx, int endIdx)- 返回⼀个⼦串，从 `beginIndex` 到 `endIndex-1 `
  - equals(Object obj) - ⽐较两个字符串的内容是否相等。
  - **replace**(char oldChar, char newChar)\replace(CharSequence old, CharSequence new)- 替换字符串中的字符或字符序列。
  - contains(CharSequence s) - 检查字符串是否包含指定的字符序列。

>*Notice！* 可能会问 String 中的某些方法的代码实现，例如时间复杂度等。需要进一步复习。
---

### :heart_on_fire: String，StringBuilder，StringBuffer各自的特点，区别，优缺点，应用场景？
- String：
  - String 类的对象是不可变的，也就是说，一旦一个 String 对象被创建，它所包含的字符串内容是不可被改变的。
  - 每次对 String 对象进行修改操作实际上和都会生成一个新的 String 对象，而不是直接修改原有的对象，这会导致额外的内存和性能开销，尤其是在大量字符串操作的情况下。
- StringBuilder：
  - 提供了一系列方法来进行字符串的增删改查操作，这些操作都是直接在原有的字符串对象底层数据上进行的，不会生成新的 String 对象。
  - 相比于 String 类，在进行频繁的字符串操作的时候，它能提供更好的性能，Java 中的字符串连 + 操作实际就是通过 StringBuilder 实现的。
  - 但是 StringBuilder 不是线程安全的。这意味着没有外部同步的情况下，他不适用于多线程环境。
- StringBuffer：
  - StringBuffer 和StringBuilder 类似，但StringBuffer 是线程安全的，它的⽅法前⾯都加了 synchronized 关键字。

**使用场景：**
- String 适合**字符串内容不会改变**的场景，比如作为 HashMap 的 key，或者储存一些长数字标识，例如电话号码。
- StringBuilder 适合单线程环境下需要频繁修改字符串内容的场景，比如在循环中拼接或者修改字符串。
- StringBuffer 现在应该不怎么使用了，因为一般不会在多线程场景下去频繁的修改字符串的内容。
>*Notice！* 可能会问一些场景上的问题。
- 使用场景：
  - 为什么适合做 HashMap 的 key? 
  - HashSet< String > 的去重原理？
  - 为什么用它来储存电话号码？
- 性能优化场景
  - 大量字符串拼接时如何避免内存浪费（预初始化StringBuilder容量）
  - 避免重复创建String的案例（如日志参数处理）
---

### :heart_on_fire: `String str1 = new String("abc")` 和` String str2 = "abc"` 的区别？字符串常量池了解吗？`String s = new String("abc")` 创建了⼏个对象？
**以上两种写法是 Java 中创建字符串的两种方式，一种是通过字面量直接赋值，一种是通过 new 关键字调用构造函数来创建。**

情况 1：直接使用双引号赋值`（String str = "abc"）`
- JVM 会首先在字符串常量池（String Pool）中查找是否存在内容为 "abc" 的字符串对象。
  - 不存在：JVM 会在常量池中创建一个新的字符串对象（内容为 "abc"），然后让变量 str 引用这个新对象。
  - 存在：JVM 会直接让变量 str 引用常量池中的现有对象，不会创建新对象，也就是说，字面量相同的引用始终指向同一个对象。相同内容的字符串在内存中只存在一份，实现对象复用。

情况 2：使用 `new String("abc")` 赋值`String str = new String("abc")`
- 构造方法 new String("abc") 中的字面量 "abc" 会触发常量池检查：
  - 不存在：JVM 会先在常量池中创建该对象，然后在堆内存中创建一个新的 String 对象，该对象的内容与常量池中的 "abc" 相同，但内存地址独立。
  - 存在：直接在堆内存中创建一个新的 String 对象，该对象的内容与常量池中的 "abc" 相同，但内存地址独立。
```java
    String s1 = "abc";          // 直接使用常量池
    String s2 = "abc";          // 复用常量池对象
    String s3 = new String("abc"); // 强制创建堆对象
    String s4 = new String("abc"); // 再创建一个堆对象

    System.out.println(s1 == s2); // true（同一常量池对象）
    System.out.println(s1 == s3); // false（常量池 vs 堆对象）
    System.out.println(s3 == s4); // false（两个独立堆对象）
```
---
**字符串常量池**
1. **核心作用是避免重复创建相同值的字符串对象。**
  - 存储位置：
  - JDK6及之前：位于永久代（PermGen），有内存上限且容易导致OutOfMemoryError。
  - JDK7+：**移到堆内存（Heap）**，可动态扩展并受垃圾回收器管理。
2. 工作原理
   - 字面量赋值：String s = "abc" 会直接检查并复用常量池中的对象。
   - **intern()方法**：手动将字符串添加到常量池（若不存在时），并返回池中对象的引用。
     - 如果当前字符串内容存在于字符串常量池（即 equals()⽅法为 true，也就是内容⼀样），直接返回字符串常量池中的字符串。
     - 否则，将此 String 对象添加到池中，并返回 String 对象的引⽤。
3. 为什么要设计字符串常量池：
   - 常量池的核心目的是**减少重复字符串的内存开销**。例如，**多个String s = "abc"的代码可以复用同一个对象**，避免**堆中生成大量相同值的对象**，从而**提升性能**和**减少GC压力**。
---
**`String s = new String("abc")` 创建了⼏个对象？**

这取决于常量池中是否已存在字面量"abc"。
- 若不存在：类加载时，字面量"abc"会被存入常量池，创建第1个对象。执行new String("abc")时，在堆中生成新对象，创建第2个对象，共创建2个对象。
- 若已存在：直接复制常量池的"abc"，在堆中生成新对象。共创建1个对象。
---
### :heart_on_fire:String 为什么设计成 final 类型，有什么好处？底层是如何实现 String 的不可变性的？
1. 不可变性使得 String 对象在使用的时候**更加安全**。因为字符串经常用作参数传递给其他的方法，例如网络连接，打开文件等等，如果String 可变，这些方法调用的参数值可能就在不知不觉中改变，从而导致网络连接被篡改，文件被修改等问题。
2. 不可变的对象因为状态不变，所以**更容易进行缓存和复用**，字符串常量池也基于了这一点特性。当代码中出现相同的字符串字面量的时候，JVM 会确保所有的引用都指向常量池中的同一个对象，实现复用从而节约内存。
3. 因为 String 的内容不会改变，所以它的**哈希值**也就**固定不变**。这使得 String 对象特别适合作为 HashMap 或 HashSet 等集合的键，因为计算哈希值只需要进⾏⼀次，提⾼了哈希表操作的效率。

**底层实现：**
- 第⼀，String 类本身被声明为 final，这意味着它不能被继承。这防⽌了⼦类可能通过添加修改⽅法来改变字符串内容的可能性。
- 第⼆，String 类内部使⽤⼀个**私有的字符数组来存储字符串数据**。这个字符数组在创建字符串时被初始化，之后不允许被改变。
```java
    private final char value[];
```
- 第三，String 类没有提供任何可以修改其内容的公共⽅法，像 concat 这些看似修改字符串的操作，实际上都是返回⼀个新创建的字符串对象，⽽原始字符串对象保持不变。
---
### :heart_on_fire:String 字符串拼接的底层实现？
- 通过 “+” 操作符拼接（编译期 JVM 会创建 StringBuilder 对象）
- StringBuilder.append()
- String.join()
>*Notice* 需要复习底层的实现
---
## 5. Integer 类
## 6. Object 类
## 7. 异常处理
### :heart_on_fire:Java 中，错误和异常的体系是怎么样的？了解多少？
````markmap
---
markmap:
  colorFreezeLevel: 2
  maxWidth: 10000
---
# `Throwable` 

## `Error`（系统级错误，程序一般无法处理）
### `VirtualMachineError`
- `OutOfMemoryError`（内存耗尽）
- `StackOverflowError`（栈溢出
### `LinkageError`
- `NoClassDefFoundError`（类定义缺失）
- `IncompatibleClassChangeError`（不兼容的类变更）
### `AssertionError`（断言失败）
### `AWTError`（严重 AWT 错误，如 GUI 组件崩溃）
### `IOError`（底层 I/O 错误，如磁盘损坏）  

## `Exception`（程序可处理的异常）
### `RuntimeException`（Unchecked Exception，编译器不强制处理）
- `NullPointerException`（空指针）
- `IndexOutOfBoundsException`（索引越界）
- `IllegalArgumentException`（非法参数） 
- `ArithmeticException`（算术错误，如除以0）
- `ClassCastException`（类型转换错误）
- `ConcurrentModificationException`（并发修改异常）

### **Checked Exception**（编译器强制要求处理）
- `IOException`（输入/输出错误）
    - `FileNotFoundException`（文件未找到）
    - `EOFException`（文件意外结束）
- `SQLException`（数据库操作错误） 
- `ClassNotFoundException`（类未找到）
- `InterruptedException`（线程被中断）
````
Java 中所有的错误和异常都是统一由 Throwable 这个基类来管理的，首先需要说明的是，Java 中的异常和错误继承体系是纯类继承关系。
- Error 表示 JVM 或者系统级的错误，例如内存耗尽 OOM，SOF错误，程序是无法恢复的，开发者无需捕获处理也无法处理。
- Exception 表示程序运行中可预见的异常行为，通常可以分为两类
  - **编译时异常**也叫 Checked Exception，必须显式的处理（*具体如何处理，需要进一步复习*）
    - 继承自 Exception 类，要么 try-catch，要么 throws。
    - 通常涉及外部资源问题（如 IOException、SQLException）。
  - **运行时异常**也就是 RuntimeException，编译器不强制处理，通常可以通过修改代码逻辑来避免。
    - 继承自 RuntimeException。
    - 编译器不强制处理（如 NullPointerException、ArrayIndexOutOfBoundsException）。
    - 通常由代码逻辑错误导致，应通过修复代码解决，而非捕获。
---
### :heart_on_fire:写程序的时候，一般怎么处理异常？
首先需要明确异常的类型。
- 如果是**运行时异常**，这类异常通常是在程序运行的时候抛出，对于运⾏时异常，Java 编译器不要求必须处理它们（即不需要捕获也不需要声明抛出）。运⾏时异常通常是由程序逻辑错误导致的，如 NullPointerException、IndexOutOfBoundsException 等。
- 如果是**编译时异常**，那必须要被显式处理（捕获或 throws 声明抛出）。如果⽅法可能抛出某种编译时异常，但没有捕获它（try-catch）或没有在⽅法声明中⽤ throws ⼦句声明它，那么编译将不会通过。例如：IOException、SQLException 等。
  - 具体来说，遇到这种必须要显式处理的异常，我们有两种方案：
    - 不捕获处理，直接声明后抛出。
        ```java
        public void test() throws Exception {
            throw new Exception("抛出异常");
        }
        ```
    - 捕获异常，并处理。
        ```java
            try {
            //包含可能会出现异常的代码以及声明异常的⽅法
        }catch(Exception e) {
            //捕获异常并进⾏处理
        }finally {
            //可选，必执⾏的代码
        }
        ```
    - *Notice：* finally 块中通常用来在异常处理结束之后释放资源，在 Java 7 中，可以通过 try-with-resource 的方式自动释放资源而不用写 finally 块。
        ```java
            // try-with-resources 自动关闭资源
        try (FileReader fr = new FileReader("file.txt")) {
            // 操作文件
        } catch (IOException e) {
            log.error("文件读取失败", e);  // 记录日志
            throw new BusinessException("业务异常", e);  // 封装自定义异常
        }
        ```
---
### :heart_on_fire:处理异常的时候，catch 和 finally 的异常可以同时抛出吗？
可以，但需要注意覆盖问题：
- 如果 catch 和 finally 块都抛出异常，**最终抛出的异常是 finally 中的异常，catch 的异常会被覆盖**。
    - 在 finally 中避免直接抛出异常，优先处理资源释放等操作。
    - 若必须抛出，可**保留原始异常**（Java 7+ 支持 addSuppressed() 方法）。
        ```java
            try {
        // 可能抛出 IOException
        } catch (IOException e) {
            throw new BusinessException("业务异常", e);  // 原始异常
        } finally {
            try {
                // 可能抛出 SQLException
            } catch (SQLException ex) {
                BusinessException be = new BusinessException("Finally 异常", ex);
                be.addSuppressed(e);  // 附加原始异常
                throw be;
            }
        }
        ```
---
### :heart_on_fire:return 先执行还是 finally 块先执行？
首先这个问题，我想是基于 try 或 catch 块中存在 return 语句的时候，才需要考虑的。
- 如果try 或 catch 块中存在 return 语句，在 finally 块中的代码执行之前，JVM 会计算前面 return 后的**表达式值**并且把结果压入操作数栈，然后执行 finally 块中的代码。
- 所以如果非要分先后顺序的化，那么 finally 块中的代码会在 **return 表达式计算之后**、**方法实际返回之前**执行。
- 其次，这个问题还需要考虑到 finally 块中的操作对返回值的影响。
  - 如果 finally 块中有 return 语句，就比较栓Q了，因为它会覆盖前面 try 或 catch 块中保存的返回值，直接称为最终的结果。
  - 如果 finally 块中没有 return 语句，则**基本数据类型**或者**不可变对象**的返回值由前面 try 或 catch 块中保存的返回值决定，即使 finally 中修改了相关变量，也不会影响已保存的返回值。但对于**可变对象**，finally中对**对象状态的修改**会生效。
---