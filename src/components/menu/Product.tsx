export const Product = () => {
	return (
		<li className="aspect-[256/160] rounded-md overflow-hidden relative">
			<span>R$ 00,00</span>
			<footer>
				<span>Nome do Produto</span>
				<p>Descrição do produto</p>
			</footer>
			<img src="https://placehold.co/256x160" className="w-full h-full absolute"/>
		</li>
	);
};
