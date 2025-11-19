'use client';

import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown, Download, Plus, ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';
import { useState } from 'react';

const transactions = [
  {
    id: 1,
    type: 'credit',
    title: 'Payment Received - Hamlet Production',
    from: 'Prithvi Theatre',
    amount: 25000,
    date: '2024-11-18',
    status: 'completed',
  },
  {
    id: 2,
    type: 'debit',
    title: 'Workshop Fee - Method Acting',
    to: 'TheatreConnect Academy',
    amount: 2999,
    date: '2024-11-15',
    status: 'completed',
  },
  {
    id: 3,
    type: 'credit',
    title: 'Event Performance',
    from: 'Cultural Festival',
    amount: 15000,
    date: '2024-11-10',
    status: 'completed',
  },
  {
    id: 4,
    type: 'debit',
    title: 'Script Purchase - Mumbai Stories',
    to: 'Script Store',
    amount: 599,
    date: '2024-11-08',
    status: 'completed',
  },
  {
    id: 5,
    type: 'credit',
    title: 'Mentorship Session',
    from: 'Rajesh Kumar',
    amount: 3500,
    date: '2024-11-05',
    status: 'completed',
  },
  {
    id: 6,
    type: 'debit',
    title: 'Platform Commission',
    to: 'TheatreConnect',
    amount: 1250,
    date: '2024-11-05',
    status: 'completed',
  },
];

export default function WalletPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const balance = 45650;
  const totalEarned = transactions.filter(t => t.type === 'credit').reduce((sum, t) => sum + t.amount, 0);
  const totalSpent = transactions.filter(t => t.type === 'debit').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
            <Wallet className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">My</span>{' '}
            <span className="neon-text-cyan">Wallet</span>
          </h1>
          <p className="text-text-muted">
            Manage your earnings and transactions
          </p>
        </motion.div>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 bg-gradient-to-br from-neon-pink/20 via-neon-cyan/20 to-neon-lime/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-text-muted mb-2">Available Balance</p>
            <h2 className="text-5xl font-bold text-white mb-6">
              ₹{balance.toLocaleString()}
            </h2>

            <div className="flex gap-4">
              <button className="btn-primary flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Money
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Download className="w-5 h-5" />
                Withdraw
              </button>
              <button className="btn-outline">
                <CreditCard className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-featured"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-full bg-neon-lime/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-neon-lime" />
              </div>
              <span className="text-neon-lime text-sm font-bold">+12.5%</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ₹{totalEarned.toLocaleString()}
            </div>
            <div className="text-sm text-text-muted">Total Earned (30d)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-featured"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-full bg-red-400/20 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-red-400 text-sm font-bold">-5.2%</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ₹{totalSpent.toLocaleString()}
            </div>
            <div className="text-sm text-text-muted">Total Spent (30d)</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-featured"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-neon-cyan" />
              </div>
              <span className="text-neon-cyan text-sm font-bold">+8.3%</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ₹{(totalEarned - totalSpent).toLocaleString()}
            </div>
            <div className="text-sm text-text-muted">Net Income (30d)</div>
          </motion.div>
        </div>

        {/* Period Selector */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>
          <div className="flex gap-2">
            {['7d', '30d', '90d', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedPeriod === period
                    ? 'bg-neon-pink text-white'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                {period === '7d' && 'Last 7 Days'}
                {period === '30d' && 'Last 30 Days'}
                {period === '90d' && 'Last 90 Days'}
                {period === '1y' && 'Last Year'}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured"
        >
          <div className="divide-y divide-neon-cyan/20">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    transaction.type === 'credit'
                      ? 'bg-neon-lime/20'
                      : 'bg-red-400/20'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className={`w-6 h-6 text-neon-lime`} />
                    ) : (
                      <ArrowUpRight className={`w-6 h-6 text-red-400`} />
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">{transaction.title}</h4>
                    <p className="text-text-muted text-sm">
                      {transaction.type === 'credit' ? `From: ${transaction.from}` : `To: ${transaction.to}`}
                    </p>
                    <p className="text-text-muted text-xs mt-1">
                      {new Date(transaction.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className={`text-xl font-bold ${
                      transaction.type === 'credit' ? 'text-neon-lime' : 'text-red-400'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                    </div>
                    <span className="text-xs text-text-muted capitalize">{transaction.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-neon-cyan/20 text-center">
            <button className="btn-outline text-sm">
              Load More Transactions
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
