# network-config-definition
## Network IP Addressing Scheme Definition

**Description:**

This software, written in JavaScript, HTML, and CSS, allows you to:

* **Identify IP Address and Subnet Mask:** Input an IP address and its subnet mask to determine its properties.
* **Determine IP Class:** Classify the IP address as A, B, C, D, or E based on its first octet.
* **Define IP Address Range:** Calculate the range of valid IP addresses within the same subnet.
* **Identify Network and Host Numbers:** Find the network and host numbers of the provided IP address, both with and without applying the subnet mask.

**Features:**

* User-friendly interface to input IP address and subnet mask.
* Displays detailed information about the IP address:
    * IP Class
    * IP Address Range
    * Network Number
    * Host Number
* Allows you to apply the subnet mask and see the updated network and host numbers.

**Usage:**

1. Clone the repository:

```
git clone https://github.com/bard-project/ip-addressing-scheme.git
```

2. Navigate to the project directory:

```
cd ip-addressing-scheme
```

3. Start the local server:

```
npm start
```

4. Open your browser and access the application at `localhost:3000`.

**Example:**

Enter the IP address `192.168.1.100` and subnet mask `255.255.255.0`.

**Results:**

* **IP Class:** B
* **IP Address Range:** 192.168.1.0 - 192.168.1.255
* **Network Number:** 192.168.1.0
* **Host Number:** 100

**With Subnet Mask Applied:**

* **Network Number:** 192.168.1.0
* **Host Number:** 100

**Screenshots:**

Screenshot of the IP addressing scheme application: 

**Technologies:**

* JavaScript
* HTML
* CSS

**Links:**

* GitHub repository: [https://github.com/github](https://github.com/github) (Replace with your actual repository URL)

**License:**

MIT
