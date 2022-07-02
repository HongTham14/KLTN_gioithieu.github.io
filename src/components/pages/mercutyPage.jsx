import styled from "styled-components";
import "./mercuryPage.css";
import Mercury from "../../planet/mercury";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import { Sun } from "../sun";


export  function Mercurypage() {
  return (
    
    <div className="container">
      <div className="text">
      <div className="title">Khoa Công Nghệ thông tin</div>
      <div className="content">
        <div className="title_content">Giới thiệu</div>
        <div className="text_content">
          <p>Khoa Công nghệ Thông tin thành lập vào năm 1995; được thành lập lại theo Quyết định số 106/QĐ/VL-HĐQT, ngày 05/7/2016.</p>
          <p>Năm 2001, Khoa tham gia vào hệ thống đào tạo kỹ sư công nghệ thông tin theo chuẩn Nhật Bản.</p>
          <p>Từ năm 2008 đến 2018, Khoa triển khai đào tạo ngành Kỹ thuật Phần mềm theo chương trình do Carnegie Mellon University (đại học số 1 của Mỹ về kỹ thuật phần mềm) chuyển giao.</p>
       </div>
       <div className="title_content">Công nghệ thông tin có gì thú vị?</div>
        <div className="text_content">
          <p>Công nghệ Thông tin (IT – Information Technology) là một thuật ngữ bao gồm mạng lưới internet, phần mềm, trao đổi, phân phối, lưu trữ và sử dụng dữ liệu, thông tin dưới mọi hình thức khác nhau.</p>
          <p>Đối với thế hệ Z- thế hệ sử dụng công nghệ thông tin từ rất sớm thì công nghệ thông tin là một phần thiết yếu trong cuộc sống.</p>
        <div className="title_content">Cần những nhân tố nào để học Công nghệ thông tin?</div>
          <ul>
            <li> Đam mê công nghệ</li>
            <li>Tư duy logi</li>
            <li>Năng động, sáng tạo, tinh thần tự học kiến thức mới</li>
            <li>Kỹ năng làm việc nhóm</li>
          </ul>
       </div>
      </div>

      </div>
      <div id="merrcury">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
          {/* < Sun/> */}
          <Lights/>
          
            <Mercury/>     

        </Suspense>
      </Canvas>
      </div>
      
    </div>

  );

  function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 3]} />
      </>
    );
  }
}
