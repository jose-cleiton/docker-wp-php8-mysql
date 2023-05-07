import styled from "styled-components";

const StyledPostes = styled.main`
.posts{
  felx: 9;
  display: flex;
  flex-wrap: wrap;
}
    .post {
      width: 385px;
      margin: 0 25px 40px 25px;

    }
    .postImg{
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 10px;

    }
    .postInfo{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
.postCat{
  font-family: 'Varela Round ', sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
}
.postTitle{
  font-family: 'Josefin Sans ', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;

}

.postDate{
  font-family: 'Lora ', sans-serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;

}
.postDesc{
  font-family: 'Varela Round ', sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;

}

@media(max-width: 768px){

  .posts{
   
  }
}



`;

export default StyledPostes;