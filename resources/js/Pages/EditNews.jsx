import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-react';
import { useState } from 'react';

export default function EditNews(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	const handleSubmit = () => {
		const data = { title, description, category, id: props.myNews.id };
		Inertia.post('/news/update', data);
		setTitle('');
		setDescription('');
		setCategory('');
	};
	return (
		<div className='min-h-screen bg-slate-50'>
			<Head title={props.title} />
			<Navbar user={props.auth.user} />
			<div className='card w-full lg:w-96 bg-base-100 shadow-xl m-2'>
				<div className='p-4 text-2xl'>Edit Berita</div>
				<div className='card-body'>
					<input
						type='text'
						placeholder='Judul'
						className='m-2 input input-bordered w-full'
						onChange={(title) => setTitle(title.target.value)}
						defaultValue={props.myNews.title}
					/>
					<input
						type='text'
						placeholder='Deskripsi'
						className='m-2 input input-bordered w-full'
						onChange={(description) => setDescription(description.target.value)}
						defaultValue={props.myNews.description}
					/>
					<input
						type='text'
						placeholder='Kategori'
						className='m-2 input input-bordered w-full'
						onChange={(category) => setCategory(category.target.value)}
						defaultValue={props.myNews.category}
					/>
					<button className='btn btn-primary m-2' onClick={() => handleSubmit()}>
						UPDATE
					</button>
				</div>
			</div>
		</div>
	);
}
