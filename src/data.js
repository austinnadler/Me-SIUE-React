import accentureLogo from './assets/img/accenture_logo.png';
import amerenLogo from './assets/img/ameren_logo.png';
import trueLogo from './assets/img/truemfg_logo.png';

const companies = [
    {
        id: "Accenture",
        name: "Accenture Federal Serices",
        url: "https://www.accenture.com",
        logo: accentureLogo,
        description: "I have been working for Accenture Federal Services as a ServiceNow Developer Analyst since the end of June 2021. AFS is a consulting firm that works with US Government clients.",
        bios: [
            "I have not yet been assigned to a project at AFS"
        ],
        projects: []
    },
    {
        id: "Ameren",
        name: "Ameren",
        url: "https://www.ameren.com/",
        logo: amerenLogo,
        description: "I was a co-op at Ameren Services from May 2020 to the end of June 2021. I worked as an IT Service Management Co-op doing Performance Analytics, Reporting, and Service Portal development work. Ameren is a Saint Louis based power company that serves over 2.5 million electric and gas customers across Illinois and Missouri. My responsibilities at Ameren range from ServiceNow Performance Analytics and Reporting to ServiceNow development.",
        bios: [
            "At Ameren, I worked in a few different areas. I started out in Performance Analytics and Reporting, creating KPI dashboards for the ITSM team and anyone else who requested any type of reports or dashboards.",
            "After working in ServiceNow for a few months, I started getting more interested in the platform itself. I was given the opportunity to work on redesigning Ameren's Self-Service Portal, which drew me into ServiceNow development. I have now earned my ServiceNow Certified System Administrator Certification."
        ],
        projects: [
            {
                name: "ServiceNow Self-Service Portal Redesign (AngularJS)",
                description: ["I worked with the service catalog manager and UX team to update Ameren's ServiceNow Self-Service Portal.",
                    "My responsibilies on this project included researching the capabilities of the portal and building a functional prototype in ServiceNow using HTML, CSS and AngularJS, and deploying updates to the production environment through change management.",
                    "I built a few really cool widgets, including one to present a service catalog with a group of cards representing categories, with subcategories liseted below with dropdowns urling to popular catalog items. Another widget I built brought approvals to the service portal, and allowed approvers to view important information on the records being approved and approve or reject them directly from the portal home page."
                ]
            },
            {
                name: "ServiceNow KPI Dashboards",
                description: ["A big part of my co-op with Ameren involved creating and maintaining KPIs and dashboards for the IT Service Management team. I used ServiceNow Performance Analytics and Reports to collect data on Key Performance Indicators to help the ITSM Process Managers see metrics on their areas, and allow other people, such as assignment group managers, directors, and VPs, see how their team is affecting those KPIs."]
            },
            {
                name: "ServiceNow CMDB Cleanup Initiatives",
                description: ["I was involved in several data cleanup initiatives in the ServiceNow Configuration Management Database.",
                    "Ameren has a lot of integrations connected to ServiceNow, and sometimes things get messed up and cause duplicate records to be created. We used the ServiceNow GUI as well as an Oracle database instance to analyze this data and determine which records should be deleted. Then, we worked with the appropriate team(s) to look into the integration and determine what was causing the duplicate records to be created, so that it could be corrected."]
            },
            {
                name: "ITSM SharePoint Site / Digital Asset Management Sub-site",
                description: ["I worked with the ITSM process managers to create an informational company-facing SharePoint site for the team.",
                    "I also created a subsite for a specific project that was big enough to warrant it's own dedicated site for special announcements, training, and documentation."]
            }
        ]
    },
    {
        id: "True",
        name: "True Manufacturing",
        url: "https://www.truemfg.com",
        logo: trueLogo,
        description: "Previously, I worked as a Co-op Software Developer at True Manufacturing in O'Fallon Missouri. True is the leading manufacturer of commercial refrigeration units in the United States. At True I worked in an Agile environment developing dashboard applications for internal use on the Epicor ERP with C# and SQL.",
        bios: ["At True, I worked as a Co-op Developer creating dashboard applications in the Epicor ERP with C# and SQL. I learned a lot about professional software development and Agile in this co-op."],
        projects: [
            {
                name: "Epicor ERP Super Order Tracker Dashboard (C#, SQL)",
                description: ["Super Order Tracker is an Epicor ERP dashboard created with C# and SQL that retrieves information about customer orders to allow the customer service department to easily track customer orders and invoices.",
                    "The dashboard runs a parameterized SQL script, that allow filters on several fields with C# form controls.The dashboard consists of a table view of all orders and several filters that can be applied to narrow searches down. I created the data query with Epicor's BAQ builder and SQL, and called the query in the C# code behind the dashboard. I also got experience going through all the stages of the agile process and working with the business to determine requirements"]
            },
            {
                name: "Invoice Import SQL Script (MS SQL Server, SQL Server Management Studio)",
                description: ["Another project that I worked on at True was creating a SQL script to import invoice information into the Epicor database",
                    "There were a few thousand invoices that had not been recorded in the database that needed to be imported. The requestor compiled all of the needed information and put it into an excel spreadsheet, which I was able to import into a temporary table so that I could analyze the data and insert the fields on the sheet to their appropriate table and field in the database while making sure there were no duplicates inserted."]
            }
        ]
    },
    {
        id: "Ind",
        name: "Independent",
        bios: ["My independent projects have quite a bit of variety. I learn best by doing. So, any time I find a new tool or framework, I like to try to get straight into it and start making things."],
        projects: [
            {
                name: "This Website (AngularJS)",
                description: ["I develop and maintain this website myself with HTML, CSS, Bootstrap, AngularJS, and jQuery. I am constantly improving this site.", "Although AngularJS is no longer supported (after December 31, 2021), I plan to keep using it for this site because SIUE's personal web space program only provides a basic HTML server. However, I have also created this site with React in order to get familiar with that library."],
                url: "https://github.com/austinnadler/Me-SIUE"
            },
            {
                name: "My Project Tracker (AngularJS)",
                description: ["My Project Tracker is a database driven AngularJS Single-Page-Application that I created to keep track of the different projects that I am working on for both work and school."],
                url: "https://github.com/austinnadler/MyProjectTracker-AngularJS"
            },
            {
                name: "Customer Management (JavaFX, MySQL)",
                description: ["Customer Management is a simple database driven JavaFX app that I built in order to learn the basics of JavaFX and JDBC. I also created a CSV version to refresh on file IO in Java."],
                url: "https://github.com/austinnadler/JavaFX-Customer-Management"
            },
            {
                name: "Sales Database GUI (C#, Microsoft SQL Server)",
                description: ["Sales Database GUI is a Windows Forms app created in C# to manage an Microsoft SQL Server database. The database has four tables: customer, item, order, and order_item. It allows for creating, updating, and deleting customers, items, and orders."],
                url: "https://github.com/austinnadler/StoreDatabaseGUI"
            },
            {
                name: "Parking Member Management (HTML, CSS, jQuery, PHP, MySQL",
                description: ["Parking Member Management is a database driven web app developed as school project. The concept is that a company could use the app to manage permits and vehicles for a parking lot/garage."],
                url: "https://github.com/austinnadler/Parking-Member-Management"
            },
            {
                name: "Inventory Management System (C++)",
                description: ["Inventory Management System is a command line program written in C++ to perform adminstrative functions to a list of items. It reads a file to generate a list of items, some of which have special restrictions such as a minimum purchaser age. It also allows the user to edit the inventory file and save an updated version of it."],
                url: "https://github.com/austinnadler/Inventory-Management-System"
            },
            {
                name: "POS System (C++)",
                description: ["POS System is a program based on Inventory System that processes transactions and maintains a perpetual inventory system by updating the count of each item sold once the transaction has been completed."],
                url: "https://github.com/austinnadler/POS-System"
            },
            {
                name: "Gibberish Generator (C++)",
                description: ["Gibberish Generator is a small utility program created to quickly generate input files composed of random characters and numbers for testing other programs. It was created to save time creating items to test Inventory Management System and POS System."],
                url: "https://github.com/austinnadler/GibberishGenerator"
            },
            {
                name: "Battleship (Java)",
                description: ["Battleship is a simple command-line battleship game that uses characters to represent spaces on the board."],
                url: "https://github.com/austinnadler/Command-Battleship"
            }
        ]
    }
];

export default companies;