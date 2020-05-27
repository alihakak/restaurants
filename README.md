## Technical Questions

#### 1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

  - I spent about ~4-6 Overall, If I had more time, I would read users Geo data and show them the neaerst restarurant with first page load.

#### 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
  - React Hooks was an interesting feature I saw in React 16 , I used it in another project as below: 

   ```
const CategoryContainer = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [categories, setCategories] = useState({ categories: [] });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
                setIsLoading(false);
            } catch (err) {
                setHasError(true);
            }
        };
        if (isLoading) {
            fetchData();
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (!hasError)
        return (categories.length > 0 &&
            <>
                <CategoryHeadLine>
                    <h4>
                        {appStrings.category.headerText}
                    </h4>
                    <p> {appStrings.category.headerIntro}</p>
                </CategoryHeadLine>
                <CategoryList categories={categories}></CategoryList>
            </>
        );
};

export default CategoryContainer;
   ```

#### 3.	How would you track down a performance issue in production? Have you ever had to do this?
  - I start with looking at the page speed in a web page monitoring tool like Chrome, find out the root cause (it maybe page heaviness, network slownes), 
  then will consider looking at the back end issues, lack of proper caching , data base slowness and etc. once narrowed down will start the fix accordingly.

#### 4.	How would you improve the API that you just used? 
   - One improvement i can say is that: I would use it as /reasturant/city eg. restarurant/Montreal/ rather than passing query strings param

#### 5.	Please describe yourself using JSON.
   ```
    {
        FirstName: "Ali",
        LastName: "Hakak B",
        Age: "36",
        Occupation: "Software developer",
        Hobbies { 
            Sport: ["Basketball", "Soccer"],
            Music: ["Pop", "Country"]
        }
        Location: {
            Address: "ABCD",
            City: "Toronto",
            PostalCode: "M1M 1M1"
        }
    }
   ```
   
   
## Available Scripts

In the project directory, you can run:

### `npm install`

Then Please run 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
