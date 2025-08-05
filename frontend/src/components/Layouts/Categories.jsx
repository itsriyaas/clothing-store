import sarees from '../../assets/images/Categories/saree.webp';
import fashion from '../../assets/images/Categories/fashion.png';
import premium from '../../assets/images/Categories/premium.jpg';
import saree from '../../assets/images/Categories/saree1.webp';
import salwar from '../../assets/images/Categories/salwar.jpg';
import kurtas from '../../assets/images/Categories/kurtas.jpg';
import best from '../../assets/images/Categories/bestsellers.jpg';
import kids from '../../assets/images/Categories/kids.jpg';
import mens from '../../assets/images/Categories/men.jpg';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "New Arrivals",
        icon: sarees,
    },
    {
        name: "Sale",
        icon: fashion,
    },
    {
        name: "Premium Collections",
        icon: premium,
    },
    {
        name: "Sarees",
        icon: saree,
    },
    {
        name: "Salwar Sets",
        icon: salwar,
    },
    {
        name: "Kurtas",
        icon: kurtas,
    },
    {
        name: "Best Sellers",
        icon: best,
    },
    {
        name: "Kids & Teens",
        icon: kids,
    },
    {
        name: "Mens",
        icon: mens,
    },
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name}/>
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Categories;
