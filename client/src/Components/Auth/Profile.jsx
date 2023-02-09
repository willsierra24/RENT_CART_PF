import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
        <div className='divContainer'>
        <NavBar></NavBar>
		{isAuthenticated && (
			<div className="container">
				<div className="profile-header">
					<div className="profile-img">
						<img src={user.picture} width="200" alt="Profile Image" />
					</div>
					<div className="profile-nav-info">
						<h3 className="user-name">{user.name}</h3>
						
					</div>
					<div className="profile-option">
						<div className="notification">
							<i className="fa fa-bell"></i>
							<span className="alert-message">3</span>
						</div>
					</div>
				</div>

				<div className="main-bd">
					<div className="left-side">
						<div className="profile-side">
							<p className="mobile-no">
								<i className="fa fa-phone"></i> +23470xxxxx700
							</p>
							<p className="user-mail">
								<i className="fa fa-envelope"></i> {user.email}
							</p>
							<div className="user-bio">
								<h3>Bio</h3>
								<p className="bio">
									Lorem ipsum dolor sit amet, hello how consectetur adipisicing
									elit. Sint consectetur provident magni yohoho consequuntur,
									voluptatibus ghdfff exercitationem at quis similique. Optio,
									amet!
								</p>
							</div>
							<div className="profile-btn">
								<button className="chatbtn" id="chatBtn">
									<i className="fa fa-comment"></i> Chat
								</button>
							</div>
							<div className="user-rating">
								<h3 className="rating"></h3>
								<div className="rate">
									<div className="star-outer">
										<div className="star-inner">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
								
										
								</div>
							</div>
						</div>
					</div>
					<div className="right-side">
						<div className="nav">
							<ul>
								<li onClick="tabs(0)" className="user-post">
									Personal Info
								</li>
								<li onClick="tabs(1)" className="user-review">
									Bookings
								</li>
								<li onClick="tabs(2)" className="user-setting">
									{' '}
									Settings
								</li>
							</ul>
						</div>
						<div className="profile-body">
							<div className="profile-posts tab">
								<h1>Your Post</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
									quia sunt itaque ut libero cupiditate ullam qui velit laborum
									placeat doloribus, non tempore nisi ratione error rem minima
									ducimus. Accusamus adipisci quasi at itaque repellat sed magni
									eius magnam repellendus. Quidem inventore repudiandae sunt
									odit. Aliquid facilis fugiat earum ex officia eveniet, nisi,
									similique ad ullam repudiandae molestias aspernatur qui autem,
									nam? Cupiditate ut quasi iste, eos perspiciatis maiores
									molestiae.
								</p>
							</div>
							<div className="profile-reviews tab">
								<h1>User reviews</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Aliquam pariatur officia, aperiam quidem quasi, tenetur
									molestiae. Architecto mollitia laborum possimus iste esse.
									Perferendis tempora consectetur, quae qui nihil voluptas.
									Maiores debitis repellendus excepturi quisquam temporibus quam
									nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime
									provident, distinctio animi commodi nemo, eveniet fugit porro
									quos nesciunt quidem a, corporis nisi dolorum minus sit eaque
									error sequi ullam. Quidem ut fugiat, praesentium velit
									aliquam!
								</p>
							</div>
							<div className="profile-settings tab">
								<div className="account-setting">
									<h1>Acount Setting</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Reprehenderit omnis eaque, expedita nostrum, facere libero
										provident laudantium. Quis, hic doloribus! Laboriosam nemo
										tempora praesentium. Culpa quo velit omnis, debitis maxime,
										sequi animi dolores commodi odio placeat, magnam, cupiditate
										facilis impedit veniam? Soluta aliquam excepturi illum natus
										adipisci ipsum quo, voluptatem, nemo, commodi, molestiae
										doloribus magni et. Cum, saepe enim quam voluptatum vel
										debitis nihil, recusandae, omnis officiis tenetur, ullam
										rerum.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
        )}
        {console.log(user)}
        <Footer></Footer>
        </div>
	);
    
    
};
 // <div>
//     <img src={user.picture} alt={user.name}  />
//     <h2 classNameName="text2">{user.name}</h2>
//     <p classNameName="text2">Email: {user.email}</p>
//     {console.log(user)}
// </div>
