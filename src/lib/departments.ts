export interface Department {
    department: string; 
    sub_departments?: string[]; 
  }
const departments: Department[] = [
	{
  	"department": "customer_service",
  	"sub_departments": [
    	"support",
    	"customer_success"
  	]
	},
	{
  	"department": "design",
  	"sub_departments": [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	}
  ]

  
  export default departments;