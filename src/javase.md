---
title: 记录Java基础部分的个人学习历程，尽可能从元问题出发，自底向上理清楚Java学习的脉络
breadcrumb: false
permalink: /java/javase.html  # 添加此行
# order: 1
category:
  - Java
tag:
  - JavaSE
date: 2025-02-14
---
## 1. 什么是Java
Java是一门`面向对象的`、`跨平台的`高级编程语言，最早由Sun公司的詹姆斯·高斯林团队在1995年发行，其设计初衷是为了`简化C++`并支持`跨平台`的特性。Java继承吸收了C++中的许多优点、也改进了其许多缺点。

---
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
- 通过继承某个类，复用其中的CRUD基础操作，就体现了`继承`的特性
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
- 在Service层，接口与实现类是分离的，通过接口注入不同实现类可以实现策略切换，这就体现了`多态`的特性。比方说支付业务，调用方只需关注接口，无需关心具体实现，新增支付方式无需修改调用逻辑。
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
- 例如一个House类，它的成员变量可能有桌子`table`和房间`room`，电视`television`等等，方法可能有供电`electricProvide()`，供暖`warmthProvide()`，开门`doorOpen()`等等。
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
- 实现多态的三个前提，缺一不可
	- 存在`继承关系`或`接口实现`，`父子类继承`或`类实现接口`是基础条件。
	- 子类`重写（Override）`父类方法
	- 父类引用指向子类对象`（向上转型）`
- Q：实际项目开发中，业务的实现看起来并没有满足条件3，为什么理解为实现了多态？例如
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
	- **Map的值类型**：`paymentServices`中存储的value实际上是`AlipayService`或`WechatPayService`的实例，但被声明为`PaymentService`类型。
	- **变量`service`的类型**：虽然声明为接口类型`PaymentService`，但实际指向的是子类对象。

### :heart_on_fire:为什么Java⾥⾯要多组合少继承？

### :heart_on_fire:Java支持多继承吗？接口可以多继承吗？

### :heart_on_fire:继承和抽象的区别？

### :heart_on_fire:抽象类和普通类的区别？

### :heart_on_fire:抽象类和接口的区别？

### :heart_on_fire:多态解决了什么问题？

### :heart_on_fire:多态的实现原理是什么？

### :heart_on_fire:重载和重写是什么，有什么区别？

### :heart_on_fire:什么是⾥⽒代换原则？

### :heart_on_fire:Java的语言特性有哪些？
- `面向对象编程`，主要是封装、继承、多态
- `跨平台性`，“一次编译、到处运行”，因此采用Java语言编写的程序具有`很好的可移植性`。
- `支持多线程`，C++语言没有内置的多线程处理机制，所以需要调用系统的API来完成多线程程序设计，而Java提供了封装好的多线程支持。
- `支持JIT`，也就是`即时编译器`。它可以在`程序运行时`将`字节码`转换成`热点机器码`来提高程序的运行速度。

### 什么是跨平台特性？原理是什么？
- 指Java语言编写的程序，一次编译后，可以在多个操作系统上运行。
- 原理是增加了一个中间件JVM，JVM负责将Java字节码转换为特定平台的机器码，并执行。
### 什么是字节码？采用字节码的好处是什么？
- 所谓的字节码，就是Java程序经过编译后产生的.class 文件。
- Java程序的运行包含着三个步骤：
	- 编译：jdk中的javac程序将Java源代码`编译`成字节码文件（.class文件）
	- 解释：jvm执行字节码文件，将字节码`解释`成操作系统能识别的机器码（二进制码）
	- 执行：操作系统`执行`机器码。
- 所以采用字节码可以便于不同的操作系统采用jvm来编译成其支持的机器码，就像是“预制菜”，商家发货给我们，我们只要用自己的锅就能做出和餐厅做的一样味道的菜。
### :heart_on_fire:JVM、JRE、JDK分别是什么？有什么区别
- **JVM**：也就是Java虚拟机，是Java实现跨平台的关键所在，不同的操作系统有不同的JVM实现。JVM负责将Java字节码转换为特定平台的机器码，并执行。
- **JRE**：也就是Java运行时环境，包含了运行Java程序所必需的库，以及JVM。
- **JDK**：一套完整的Java SDK，包括JRE，编译器`javac`、Java文档生成工具`javadoc`、Java 字节码工具`javap`等。为开发者提供了开发、编译、调试Java程序的一整套环境。
- 简单来说，JDK 包含JRE，JRE包含JVM。
### Java继承了C++哪些优点又改进了哪些缺点？

继承优点：
- **面向对象**：继承了C++的`面向对象特性`，如类、继承、多态等。
- **语法简洁**：借鉴了C++的语法，但去除了复杂和冗余的部分，使语法更加简洁。
- **标准库**：提供了丰富的`标准库`，类似于C++的`标准模板库（STL）`。

改进缺点：
- **手动内存管理**：引入`垃圾回收机制`自动管理内存，避免`手动管理内存的复杂性`和`潜在的内存泄漏`。
- **指针**：Java`取消了指针`，使用`引用`代替，避免指针操作中的常见错误，如`空指针`、`野指针`等。
- **多重继承**：Java`不支持多重继承`，而是通过`接口`实现类似的功能，避免多重继承带来的复杂性。

### 为什么说Java是“编译与解释并存”的语言？
- `编译型语言`是指`编译器`针对特定的操作系统，将`源代码`一次性翻译成可被其执行的`机器码`。
- `解释型语言`是指`解释器`对源代码进行逐行解释，解释成`特定平台的机器码`并执行。
- 之所以有人说Java是“编译与解释并存”的语言，是因为Java程序需要`先将Java源代码文件编译`字节码文件，`再解释执行`。

---

