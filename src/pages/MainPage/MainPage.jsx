import ButtonAddTransaction from "../../components/BtnAddTransaction/BtnAddTransaction";
import Navigation from "../../components/Navigation/Navigation";
import Modal from '../../components/Modal/Modal'
import { useEffect,useState } from 'react';
export default function MainPage() {
	const [showModal, setShowModal] = useState(false);
	const onClose = () => {
		setShowModal(!showModal);
	  };
	return (
		<>
			<Navigation />
			<h1>MainPage</h1>
			<ButtonAddTransaction onClick={onClose}/>
			{showModal && <Modal showModal={showModal} setShowModal={setShowModal}/>}
		</>
	);
}
