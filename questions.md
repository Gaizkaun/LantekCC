Questions:

- How long did you spend on the coding test? What would you add to your solution if you had more time?
About 2 hours to do it well.I could do in one hour.
-  What would you add to your solution if you had more time?
Order datatable, add filter by columns, select option, change row colors...
- What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Parameter passing between components using a service.
constructor() { }
private param = new Subject<string>();
  parameters$ = this.param.asObservable();
  sendParameter(parametro:any) {
    this.param.next(parametro);
  }

- How would you track down a performance issue in production? Have you ever had to do this?
The performance issue often depends on the data collection process. There are usually two cases: 
1) That the data retrieval from the source (API, WebService or Database) is not correct and the data is not paged.
2) That the back-end is not optimized and if the database queries are not optimized, it takes too long to return the data.
What I have had to do is basically paginate or cache the data either in front-end or back-end until there were some changes.

- How would you improve the Lantek API that you just used?
First, I would add the header or main node to know what kind of data is being collected.
Second, I would add parameters directly in the end-point to filter the returned data (by fields or number of records).
Third, I would add an end-point with a JWT to obtain an authentication token.
I don't know the back-end so I can't give any further advice ;)
