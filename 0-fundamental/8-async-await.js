const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
})

//promise.then(result => console.log(result)).catch(error => console.log(error));

//ตัวอย่างการใช้งาน promise
const fetchData = (url) => {
    //สร้างฟังก์ชันสำหรับดึงข้อมูลจาก API
    const data = [
        {
            url: '/api/users',
            method: 'GET',
            data: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' },
                { id: 3, name: 'Jim' },
            ],
            responseTime: 1000
        },
        {
            url: '/api/posts',
            method: 'GET',
            data: [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
                { id: 3, title: 'Post 3' },
            ],
            responseTime: 2000
        },
        {
            url: '/api/products',
            method: 'GET',
            data: [
                { id: 1, name: 'Product 1' },
                { id: 2, name: 'Product 2' },
                { id: 3, name: 'Product 3' },
            ],
            responseTime: 3000
        }
    ]
    const findData = data.find(item => item.url === url);
    if (!findData) {
        return Promise.reject('not found');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findData.data);
        }, findData.responseTime);
    })
}

// then catch
// fetchData('/api/users').then(data => console.log(data)).catch(error => console.log(error));
// fetchData('/api/posts').then(data => console.log(data)).catch(error => console.log(error));


// async await
const fn = async () => {
    try {
        console.time('fetchData');
        const users = await fetchData('/api/users');
        const posts = await fetchData('/api/posts')
        const products = await fetchData('/api/products')
        console.timeEnd('fetchData');
        //  const notFound = await fetchData('/api/notfound');
        return { users, posts, products }
    } catch (error) {
        console.log('error', error);
    }
}

fn();


const fnPromiseAll = async () => {
    try {
        console.time('fnPromiseAll');
        const [users, posts, products] = await Promise.all([
            fetchData('/api/users'),
            fetchData('/api/posts'),
            fetchData('/api/products')
        ]);
        console.timeEnd('fnPromiseAll');
        return { users, posts, products }
    } catch (error) {
        console.log('error', error);
    }
}

fnPromiseAll();


