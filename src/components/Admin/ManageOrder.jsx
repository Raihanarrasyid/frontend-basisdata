import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";
import { Card, CardContent } from "@mui/material";

export default function ManageOrder() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  const API = import.meta.env.VITE_API;

  const handleSelesaikan = async (idPesanan) => {
    try {
      const response = await axios.patch(
        `${API}/admin/${idPesanan}/set-pesanan-selesai`
      );

      const updatedOrders = orders.map((order) => {
        if (order.id_pesanan === idPesanan) {
          return { ...order, status_pesanan: "Selesai" }; // Ubah status pesanan
        }
        return order;
      });
      setOrders(updatedOrders); // Perbarui state orders dengan data yang sudah diperbarui
    } catch (error) {
      console.error("Error selesaikan pesanan:", error);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API}/admin/all-pesanan`);
        setOrders(response.data.allPesanan);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <Box className="my-5">
      {loading ? (
        <Typography
          data-aos="fade"
          variant="h2"
          className="text-white text-center my-5"
        >
          Loading...
        </Typography>
      ) : (
        <Box>
          {orders.map((order) => (
            <Card
              key={order.id_pesanan}
              sx={{
                marginBottom: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  ID Pesanan: {order.id_pesanan}
                </Typography>
                <Typography>Nama Pelanggan: {order.nama_pelanggan}</Typography>
                <Typography>
                  Total Harga Pesanan: {order.total_harga_pesanan}
                </Typography>
                <Typography>Alamat: {order.alamat}</Typography>
                <Typography>Nomor Telepon: {order.nomor_telepon}</Typography>
                <Typography variant="h6">Menu:</Typography>
                <ul>
                  {order.menu.map((item, index) => (
                    <li key={index}>
                      {item.nama_menu} - {item.harga}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Box className="flex flex-1 justify-between p-5">
                <Typography variant="h5">
                  Status Pesanan: {order.status_pesanan}
                </Typography>
                <Button
                  onClick={() => handleSelesaikan(order.id_pesanan)}
                  variant="contained"
                >
                  Selesaikan Pesanan
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
